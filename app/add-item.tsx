import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState, useMemo } from 'react';

import GroupBg from "../assets/Group1.svg";
import ArrowIcon from "../assets/Arrow.svg";
import SearchIcon from "../assets/search.svg";
import ButtonBg from "../assets/Button.svg";


export default function AddItem() {
  const router = useRouter();

  const [gender, setGender] = useState(true);     // true = دختر


  return (
    <SafeAreaView edges={["top", "bottom"]} className="w-full h-full bg-white">
      <View className="w-full h-full m-0 relative bg-white">
        <View className="absolute w-full h-full overflow-hidden">
          <GroupBg width="100%" height="100%" preserveAspectRatio="none" />
        </View>

        <View className="w-full h-full gap-1 p-[25px] relative">
          {/* هدر */}
          <View className="w-full min-h-[32px] flex items-center justify-center mb-2 relative">
            <Text className="font-estedadBold text-[19px] leading-[30px]">
              افزودن آیتم  
            </Text>
            <TouchableOpacity
              className="absolute left-0 h-6 w-6"
              onPress={() => router.back()}
            >
              <ArrowIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          {/* جنسیت و مکان و ... (بدون تغییر) */}
          <View className="w-full mb-3 flex gap-2 items-center">
            <Text className="font-estedadMedium text-[16px] text-black">نوع</Text>
            <View className="w-full flex flex-row-reverse gap-3 justify-between h-[54px]">
              <TouchableOpacity 
                onPress={() => setGender(true)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  gender ? "bg-red-500 text-white" : "border-2 border-red-500"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${gender ? "text-white" : "text-red-500"}`}>
                  قرآن
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setGender(false)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  !gender ? "bg-blue-700 text-white" : "border-2 border-blue-700"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${!gender ? "text-white" : "text-blue-700"}`}>
                  غیره
                </Text>
              </TouchableOpacity>
            </View>
          </View>
            <View className="w-full h-[46px] flex justify-end items-center bg-white border border-gray-300 rounded-xl">
              <TextInput 
                className="h-full w-full outline-none border-none font-estedad text-[14px] text-right px-3" 
                style={{ direction: "rtl" }} 
                placeholder="نام و نام خانوادگی" 
              />
            </View>



          {/* دکمه‌ها */}
          <TouchableOpacity
            className="w-full h-[52px] justify-center items-center relative mt-4"
            onPress={() => router.push("/add-students")}
          >
            <View className="absolute w-full h-full">
              <ButtonBg width="100%" height="100%" preserveAspectRatio="none" />
            </View>
            <Text className="font-estedadBold text-white text-[20px]">
              افزودن آیتم  
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}