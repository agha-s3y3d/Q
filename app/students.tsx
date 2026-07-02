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
    name: "سید علی حسینی",
    age: 14,
    phone: "+98 9946600262",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 2,
    name: "سید آرزو نجفی",
    age: 15,
    phone: "+98 9778453697",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 3,
    name: "علی صادقی",
    age: 11,
    phone: "+98 9415388614",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 4,
    name: "راضیه حسینی",
    age: 12,
    phone: "+98 9356719671",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 5,
    name: "سید حمید محمدی",
    age: 15,
    phone: "+98 9101484169",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 6,
    name: "مینا رضایی",
    age: 15,
    phone: "+98 9334196542",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 7,
    name: "سید ناصر کاظمی",
    age: 15,
    phone: "+98 9661973203",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 8,
    name: "سید مریم صادقی",
    age: 14,
    phone: "+98 9641332263",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 9,
    name: "سید احمد رضایی",
    age: 11,
    phone: "+98 9308845872",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 10,
    name: "سید سکینه احمدی",
    age: 14,
    phone: "+98 9447738585",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 11,
    name: "علی رضایی",
    age: 15,
    phone: "+98 9967581719",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 12,
    name: "سید لیلا کرمی",
    age: 14,
    phone: "+98 9226702978",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 13,
    name: "رضا میرزایی",
    age: 13,
    phone: "+98 9406963715",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 14,
    name: "سید نازنین طباطبایی",
    age: 13,
    phone: "+98 9239139336",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 15,
    name: "سید ناصر کاظمی",
    age: 15,
    phone: "+98 9789371837",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 16,
    name: "مینا رضایی",
    age: 11,
    phone: "+98 9764650912",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 17,
    name: "سید حسین احمدی",
    age: 15,
    phone: "+98 9479544198",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 18,
    name: "سید سارا جعفری",
    age: 14,
    phone: "+98 9871835223",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 19,
    name: "سید مهدی نجفی",
    age: 12,
    phone: "+98 9569269978",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 20,
    name: "سید زینب موسوی",
    age: 15,
    phone: "+98 9123456780",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 21,
    name: "امیر حسینی",
    age: 13,
    phone: "+98 9312345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 22,
    name: "فاطمه رضایی",
    age: 12,
    phone: "+98 9412345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 23,
    name: "حسن محمدی",
    age: 14,
    phone: "+98 9512345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 24,
    name: "زهرا احمدی",
    age: 11,
    phone: "+98 9612345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 25,
    name: "سید محمد جعفری",
    age: 15,
    phone: "+98 9712345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 26,
    name: "نرگس میرزایی",
    age: 13,
    phone: "+98 9812345678",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 27,
    name: "کاظم رضایی",
    age: 12,
    phone: "+98 9912345678",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 28,
    name: "مهناز کاظمی",
    age: 14,
    phone: "+98 9123456790",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 29,
    name: "رحیم نوری",
    age: 15,
    phone: "+98 9223456790",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 30,
    name: "عاطفه صادقی",
    age: 11,
    phone: "+98 9323456790",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 31,
    name: "مجید حسینی",
    age: 13,
    phone: "+98 9534515109",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 32,
    name: "مینا حسینی",
    age: 14,
    phone: "+98 9426262280",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 33,
    name: "سید امیر جعفری",
    age: 13,
    phone: "+98 9401894208",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 34,
    name: "سید زینب میرزایی",
    age: 11,
    phone: "+98 9318585258",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 35,
    name: "سید حسن میرزایی",
    age: 15,
    phone: "+98 9282906419",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 36,
    name: "زهرا حسینی",
    age: 12,
    phone: "+98 9856205117",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 37,
    name: "محمد رضایی",
    age: 14,
    phone: "+98 9113573072",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 38,
    name: "سید سکینه میرزایی",
    age: 12,
    phone: "+98 9513316746",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 39,
    name: "سید کاظم نوری",
    age: 12,
    phone: "+98 9697795831",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 40,
    name: "سید زهرا جعفری",
    age: 11,
    phone: "+98 9748993236",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 41,
    name: "حسن حسینی",
    age: 14,
    phone: "+98 9827104098",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 42,
    name: "سید عاطفه میرزایی",
    age: 14,
    phone: "+98 9973572631",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 43,
    name: "سید رضا کاظمی",
    age: 13,
    phone: "+98 9942233996",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 44,
    name: "آرزو محمدی",
    age: 11,
    phone: "+98 9127499714",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 45,
    name: "امیر محمدی",
    age: 11,
    phone: "+98 9554319691",
    gender: "پسر",
    loc: "اتابک",
  },
  {
    id: 46,
    name: "زهرا کاظمی",
    age: 14,
    phone: "+98 9974832777",
    gender: "دختر",
    loc: "اتابک",
  },
  {
    id: 47,
    name: "سید ناصر احمدی",
    age: 11,
    phone: "+98 9473711722",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 48,
    name: "لیلا نجفی",
    age: 12,
    phone: "+98 9304106774",
    gender: "دختر",
    loc: "محبین",
  },
  {
    id: 49,
    name: "سید سعید نوری",
    age: 13,
    phone: "+98 9241331415",
    gender: "پسر",
    loc: "محبین",
  },
  {
    id: 50,
    name: "سید آرزو محمدی",
    age: 12,
    phone: "+98 9834072175",
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