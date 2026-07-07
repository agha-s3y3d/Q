import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

import GroupBg from "../assets/Group1.svg";
import ArrowIcon from "../assets/Arrow.svg";
import SearchIcon from "../assets/search.svg";
import DeleteIcon from "../assets/delete.svg";
import EditIcon from "../assets/edit.svg";
import ButtonBg from "../assets/Button.svg";

import * as SQLite from 'expo-sqlite';
import { type Student } from '../database';   // مسیر فایل database.ts رو درست کن

// رنگ‌های تگ‌ها
const LOC_STYLES = {
  اتابک: { border: "border-pink-700", text: "text-pink-700" },
  محبین: { border: "border-blue-700", text: "text-blue-700" },
};

const GENDER_STYLES = {
  پسر: { border: "border-green-700", text: "text-green-700" },
  دختر: { border: "border-orange-700", text: "text-orange-700" },
};

export default function Students() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  // خواندن داده‌ها از دیتابیس
  const loadStudents = async () => {
    try {
      setLoading(true);
      const db = await SQLite.openDatabaseAsync('school.db');
      
      const result = await db.getAllAsync<Student>(
        'SELECT * FROM students ORDER BY name'
      );
      
      setStudents(result);
    } catch (error) {
      console.error("خطا در خواندن دانش‌آموزان:", error);
    } finally {
      setLoading(false);
    }
  };

  // بارگذاری اولیه
  useEffect(() => {
    loadStudents();
  }, []);

  // فیلتر جستجو
  const filteredStudents = students.filter((student) =>
    student.name.includes(text) ||
    student.phone.includes(text) ||
    student.loc.includes(text) ||
    student.gender.includes(text)
  );

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} className="w-full h-full bg-white">
      <View className="w-full h-full relative bg-white">
        <View className="absolute w-full h-full overflow-hidden">
          <GroupBg width="100%" height="100%" preserveAspectRatio="none" />

          <BlurView intensity={80} tint="light" style={{ position: "absolute", width: "100%", height: "100%" }} />
        </View>

        <View className="w-full h-full gap-4 p-[25px]">

          {/* Header */}
          <View className="w-full min-h-[32px] justify-center items-center relative">
            <Text className="font-estedadBold text-[19px] leading-[30px]">
              قرآن آموزان
            </Text>

            <TouchableOpacity
              className="absolute left-0 h-6 w-6"
              onPress={() => router.back()}
            >
              <ArrowIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View className="w-full h-[43px] bg-white rounded-2xl shadow-lg flex-row-reverse items-center gap-2 px-5">
            <SearchIcon width={18} height={18} />
            <TextInput
              className="flex-1 text-right font-estedadMedium text-black"
              placeholder="دنبال کی میگردی؟"
              value={text}
              onChangeText={setText}
            />
          </View>

          {/* Students List */}
          <ScrollView className="flex-1" contentContainerStyle={{ gap: 12 }}>
            {filteredStudents.map((item) => {
              const locStyle = LOC_STYLES[item.loc];
              const genderStyle = GENDER_STYLES[item.gender];

              return (
                <TouchableOpacity
                  key={item.id}
                  className="w-full h-[80px] bg-white border border-gray-400 rounded-2xl px-5 py-2 justify-between"
                  onPress={() => console.log("Edit", item.id)}
                >
                  {/* بالا */}
                  <View className="w-full flex-row-reverse justify-between items-center">
                    <View className="flex-row-reverse gap-1">
                      <Text className={`px-2 rounded-[10px] border-2 ${locStyle.border} ${locStyle.text} font-estedadBold text-[11px]`}>
                        {item.loc}
                      </Text>
                      <Text className={`px-2 rounded-[10px] border-2 ${genderStyle.border} ${genderStyle.text} font-estedadBold text-[11px]`}>
                        {item.gender}
                      </Text>
                    </View>

                    <Text className="font-estedadMedium text-gray-600 text-[13px]">
                      {item.phone}
                    </Text>
                  </View>

                  {/* پایین */}
                  <View className="w-full flex-row-reverse justify-between items-center">
                    <View className="flex-row-reverse gap-2 items-center">
                      <Text className="font-estedadBold text-[16px]">{item.name}</Text>
                      <Text className="font-estedadBlack text-[16px]">{item.age}</Text>
                    </View>

                    <View className="flex-row gap-2">
                      <TouchableOpacity onPress={() => console.log("Delete", item.id)}>
                        <DeleteIcon width={26} height={26} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}

            {filteredStudents.length === 0 && (
              <Text className="text-center text-gray-500 mt-10">دانشور یافت نشد</Text>
            )}
          </ScrollView>

          {/* Add Button */}
          <TouchableOpacity
            className="w-full h-[52px] justify-center items-center relative"
            onPress={() => router.push("/add-students")}
          >
            <View className="absolute w-full h-full">
              <ButtonBg width="100%" height="100%" preserveAspectRatio="none" />
            </View>
            <Text className="font-estedadBold text-white text-[20px]">
              افزودن قرآن آموز
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}