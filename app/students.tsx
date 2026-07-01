import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

import GroupBg from "../assets/Group1.svg";
import ArrowIcon from "../assets/Arrow.svg";
import SearchIcon from "../assets/search.svg";
import DeleteIcon from "../assets/delete.svg";
import EditIcon from "../assets/edit.svg";
import ButtonBg from "../assets/Button.svg";

// نگاشت رنگ تگ‌ها به کلاس‌های ثابت Tailwind (کلاس داینامیک مثل border-${x}-700 کار نمی‌کنه)
const TAG_STYLES: Record<string, { border: string; text: string }> = {
  green: { border: "border-green-700", text: "text-green-700" },
  orange: { border: "border-orange-700", text: "text-orange-700" },
  pink: { border: "border-pink-700", text: "text-pink-700" },
};

export default function Students() {
  const router = useRouter();
  const [text, setText] = useState("");

  const students = [
    { name: "اتابک", tag: "پسر", tagColor: "green" },
    { name: "محبین", tag: "دختر", tagColor: "orange" },
  ];

  return (
    <SafeAreaView edges={["top", "bottom"]} className="w-full h-full bg-white">
      <View className="w-full h-full m-0 relative bg-white">
        <View className="absolute w-full h-full overflow-hidden">
          <GroupBg width="100%" height="100%" preserveAspectRatio="none" />
          <BlurView
    intensity={80}
    tint="light"
    style={{ position: "absolute", width: "100%", height: "100%" }}
  />
        </View>

        <View className="w-full h-full gap-4 p-[25px] relative">
          <View className="w-full min-h-[32px] flex items-center justify-center mb-2 relative">
            <Text className="font-estedadBold text-[19px] leading-[30px]">قرآن آموزان</Text>
            <TouchableOpacity
              className="absolute left-0 h-6 w-6"
              onPress={() => router.back()}
            >
              <ArrowIcon width={20} height={20} />
            </TouchableOpacity>
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

          <ScrollView className="w-full flex-1" contentContainerStyle={{ gap: 12 }}>
            {students.map((item, idx) => {
              const tagStyle = TAG_STYLES[item.tagColor] ?? TAG_STYLES.green;
              return (
                <TouchableOpacity
                  key={idx}
                  className="w-full h-[80px] bg-white mb-3 py-2 px-5 border border-gray-400 rounded-2xl flex justify-between items-center"
                >
                  <View className="w-full min-h-[26px] flex flex-row-reverse justify-between items-center">
                    <View className="h-full w-auto flex flex-row-reverse gap-1">
                      <Text className="h-full px-2 flex items-center justify-center rounded-[10px] border-2 border-pink-700 font-estedadBold text-pink-700 text-[11px] leading-[18px]">
                        {item.name}
                      </Text>
                      <Text
                        className={`h-full px-2 flex items-center justify-center rounded-[10px] border-2 ${tagStyle.border} font-estedadBold ${tagStyle.text} text-[11px] leading-[18px]`}
                      >
                        {item.tag}
                      </Text>
                    </View>
                    <Text className="h-full font-estedadMedium text-gray-600 text-[13px] leading-[20px]">
                      +98 9918787767
                    </Text>
                  </View>
                  <View className="w-full h-auto flex flex-row-reverse justify-between items-center">
                    <View className="flex flex-row-reverse gap-2 items-center">
                      <Text className="font-estedadBold text-[16px] leading-[24px]">
                        سید علیرضا طباطبایی
                      </Text>
                      <Text className="font-estedadBlack text-[16px] leading-[24px]">13</Text>
                    </View>
                    <View className="flex flex-row gap-1">
                      <TouchableOpacity>
                        <DeleteIcon width={16} height={16} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <EditIcon width={16} height={16} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            className="w-full h-[52px] flex items-center justify-center relative"
            onPress={() => router.push("/add-students")}
          >
            <View className="w-full h-full absolute">
              <ButtonBg width="100%" height="100%" preserveAspectRatio="none" />
            </View>
            <Text className="font-estedadBold text-[20px] leading-[32px] text-white">
              افزودن قرآن آموز
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
