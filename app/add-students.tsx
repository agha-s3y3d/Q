import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, TextInputProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from 'react'

import GroupBg from "../assets/Group1.svg";
import ArrowIcon from "../assets/Arrow.svg";
import SearchIcon from "../assets/search.svg";

type PhoneInputProps = Omit<TextInputProps, "value" | "onChangeText"> & {
  value: string;
  onChangeText: (value: string) => void;
};
const formatPhone = (text: string): string => {
  // فقط عدد
    let cleaned: string = text.replace(/\D/g, "");

    if (!cleaned) return "";

    // اگر با 0 شروع نشد
    if (!cleaned.startsWith("0")) {
      cleaned = "0" + cleaned;
    }

    // حداکثر 11 رقم
    cleaned = cleaned.slice(0, 11);

    // فرمت 4-3-4
    const part1 = cleaned.slice(0, 4);
    const part2 = cleaned.slice(4, 7);
    const part3 = cleaned.slice(7, 11);

    return [part1, part2, part3].filter(Boolean).join(" ");
  };
export default function AddStudents() {
  

  const router = useRouter();
  const [ gender , setGender ] = useState(true)
  const [ Loc , setLoc ] = useState(true)
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
    const [text, setText] = useState("");

  return (
    <SafeAreaView edges={["top", "bottom"]} className="w-full h-full bg-white">
      <View className="w-full h-full m-0 relative bg-white">
        <View className="absolute w-full h-full overflow-hidden">
          <GroupBg width="100%" height="100%" preserveAspectRatio="none" />
        </View>

        <View className="w-full h-full gap-4 p-[25px] relative">
          <View className="w-full min-h-[32px] flex items-center justify-center mb-2 relative">
            <Text className="font-estedadBold text-[19px] leading-[30px]">
              افزودن قرآن آموز
            </Text>
            <TouchableOpacity
              className="absolute left-0 h-6 w-6"
              onPress={() => router.back()}
            >
              <ArrowIcon width={20} height={20} />
            </TouchableOpacity>
          </View>
          <ScrollView className="Form w-full flex flex-1">
            <View className="w-full mb-3 flex gap-2 items-center">
              <Text className="font-estedadMedium text-[16px] text-black">جنسیت</Text>
              <View className="w-full flex flex-row-reverse gap-3 justify-between h-[54px]">
                <TouchableOpacity onPress={()=>{setGender(true)}} className={"flex-1 h-full rounded-xl " + ( !gender ? "border-red-500 border-2 color-red-500" : "bg-red-500 text-white") + " flex items-center justify-center font-estedadBold text-[16px]"}>
                  <Text className={"font-estedadBold text-[16px] " + (!gender ? "text-red-500" : "text-white")}>دختر</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setGender(false)}} className={"flex-1 h-full rounded-xl " + ( gender ? "border-blue-700 border-2 color-blue-700" : "bg-blue-700 text-white") + " flex items-center justify-center font-estedadBold text-[16px]"}>
                  <Text className={"font-estedadBold text-[16px] " + (gender ? "text-blue-700" : "text-white")}>پسر</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full mb-3 flex gap-2 items-center">
              <Text className="font-estedadMedium text-[16px] text-black">مکان</Text>
              <View className="w-full flex flex-row-reverse gap-3 justify-between h-[54px]">
                <TouchableOpacity onPress={()=>{setLoc(true)}} className={"flex-1 h-full rounded-xl " + ( !Loc ? "border-teal-600 border-2 color-teal-600" : "bg-teal-600 text-white") + " flex items-center justify-center font-estedadBold text-[16px]"}>
                  <Text className={"font-estedadBold text-[16px] " + (!Loc ? "text-teal-600" : "text-white")}>محبین</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setLoc(false)}} className={"flex-1 h-full rounded-xl " + ( Loc ? "border-orange-600 border-2 color-orange-600" : "bg-orange-600 text-white") + " flex items-center justify-center font-estedadBold text-[16px]"}>
                  <Text className={"font-estedadBold text-[16px] " + (Loc ? "text-orange-600" : "text-white")}>اتابک</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-full mb-3 h-[46px] gap-3 flex flex-row-reverse">
              <View className="flex-1 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl relative">
                <TextInput inputMode="text" className="h-full w-full outline-none border-none font-estedad text-[14px] text-right px-3" style={{direction: "rtl"}} placeholder="نام و نام خانوادگی" />
              </View>
              <View className="w-16 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl relative">
                <TextInput onChangeText={(text) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");
    setAge(onlyNumbers);
  }} inputMode="numeric" value={age} className="h-full w-full outline-none border-none font-estedad text-[14px] text-right px-3" style={{direction: "rtl"}} placeholder="سن" />
              </View>
            </View>
            <View className="w-full mb-3 h-[46px] gap-3 flex flex-row-reverse">
              <View className="flex-1 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl relative">
                <TextInput
  value={formatPhone(tel)}
  onChangeText={(text) => {
    let cleaned = text.replace(/\D/g, "");

    if (!cleaned) {
      setTel("");
      return;
    }

    if (!cleaned.startsWith("0")) {
      cleaned = "0" + cleaned;
    }

    cleaned = cleaned.slice(0, 11);

    setTel(cleaned);
  }}
  keyboardType="phone-pad"
  placeholder="شماره همراه"
  className="h-full w-full font-estedad text-[14px] text-right px-3"
  style={{ textAlign: "right", writingDirection: "rtl" }}
/>
              </View>
            </View>
            <View className="w-full h-[43px] bg-white shadow-lg mb-2 rounded-2xl flex gap-2 flex-row-reverse items-center justify-center p-[19px]">
              <SearchIcon width={18} height={18} />
              <TextInput
                className="flex-1 text-black text-right font-estedadMedium"
                value={text}
                placeholder="دنبال کی میگردی؟"
                onChangeText={setText}
                textAlign="right"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
