import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

type Student = {
  id: number;
  name: string;
  age: number;
  phone: string;
  gender: "پسر" | "دختر";
  loc: "اتابک" | "محبین";
};

const students: Student[] = [
  {
    id: 1,
    name: "سید علیرضا طباطبایی",
    age: 13,
    phone: "+98 9918787767",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 2,
    name: "فاطمه محمدی",
    age: 11,
    phone: "+98 9123456789",
    gender: "دختر",
    loc: "محبین",
  },
];

// رنگ‌های تگ‌ها
const LOC_STYLES = {
  اتابک: {
    border: "border-pink-700",
    text: "text-pink-700",
  },
  محبین: {
    border: "border-blue-700",
    text: "text-blue-700",
  },
};

const GENDER_STYLES = {
  پسر: {
    border: "border-green-700",
    text: "text-green-700",
  },
  دختر: {
    border: "border-orange-700",
    text: "text-orange-700",
  },
};

export default function Students() {
  const router = useRouter();
  const [text, setText] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.includes(text) ||
      student.phone.includes(text) ||
      student.loc.includes(text) ||
      student.gender.includes(text)
  );

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      className="w-full h-full bg-white"
    >
      <View className="w-full h-full relative bg-white">
        <View className="absolute w-full h-full overflow-hidden">
          <GroupBg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          />

          <BlurView
            intensity={80}
            tint="light"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
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

          {/* Students */}

          <ScrollView
            className="flex-1"
            contentContainerStyle={{ gap: 12 }}
          >
            {filteredStudents.map((item) => {
              const locStyle = LOC_STYLES[item.loc];
              const genderStyle = GENDER_STYLES[item.gender];

              return (
                <TouchableOpacity
                  key={item.id}
                  className="w-full h-[80px] bg-white border border-gray-400 rounded-2xl px-5 py-2 justify-between"
                >
                  {/* بالا */}

                  <View className="w-full flex-row-reverse justify-between items-center">

                    <View className="flex-row-reverse gap-1">

                      {/* محل */}

                      <Text
                        className={`px-2 rounded-[10px] border-2 ${locStyle.border} ${locStyle.text} font-estedadBold text-[11px] leading-[18px]`}
                      >
                        {item.loc}
                      </Text>

                      {/* جنسیت */}

                      <Text
                        className={`px-2 rounded-[10px] border-2 ${genderStyle.border} ${genderStyle.text} font-estedadBold text-[11px] leading-[18px]`}
                      >
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

                      <Text className="font-estedadBold text-[16px]">
                        {item.name}
                      </Text>

                      <Text className="font-estedadBlack text-[16px]">
                        {item.age}
                      </Text>

                    </View>

                    <View className="flex-row gap-2">

                      <TouchableOpacity>
                        <DeleteIcon
                          width={16}
                          height={16}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <EditIcon
                          width={16}
                          height={16}
                        />
                      </TouchableOpacity>

                    </View>

                  </View>

                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Add Button */}

          <TouchableOpacity
            className="w-full h-[52px] justify-center items-center relative"
            onPress={() => router.push("/add-students")}
          >
            <View className="absolute w-full h-full">
              <ButtonBg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              />
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