import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState, useMemo } from 'react';

import GroupBg from "../assets/Group1.svg";
import ArrowIcon from "../assets/Arrow.svg";
import SearchIcon from "../assets/search.svg";
import ButtonBg from "../assets/Button.svg";

type Item = {
  name: string;
  color: 'orange' | 'violet';
  selected: 'true' | 'false';
};

// کامپوننت نمایش آیتم‌ها با قابلیت جستجو
const MyComponent = ({ searchText }: { searchText: string }) => {
  const [data, setData] = useState<Item[]>([
  { name: "جزء ۱ (الفاتحه)", color: "orange", selected: "false" },
  { name: "جزء ۲", color: "violet", selected: "true" },
  { name: "سوره البقره", color: "violet", selected: "false" },
  { name: "جزء ۳", color: "orange", selected: "false" },
  { name: "سوره آل عمران", color: "violet", selected: "true" },
  { name: "جزء ۴", color: "violet", selected: "false" },
  { name: "سوره النساء", color: "orange", selected: "false" },
  { name: "جزء ۵", color: "violet", selected: "true" },
  { name: "سوره المائده", color: "violet", selected: "false" },
  { name: "جزء ۱۰", color: "orange", selected: "false" },
  { name: "سوره یس", color: "violet", selected: "true" },
  { name: "جزء ۳۰ (عم)", color: "violet", selected: "false" },
]);

  const toggleSelect = (index: number) => {
    setData(prevData =>
      prevData.map((item, i) =>
        i === index
          ? { ...item, selected: item.selected === "true" ? "false" : "true" }
          : item
      )
    );
  };

  // فیلتر بر اساس جستجو
  const filteredData = useMemo(() => {
    if (!searchText.trim()) return data;

    const lowerSearch = searchText.toLowerCase();
    return data.filter(item => 
      item.name.toLowerCase().includes(lowerSearch)
    );
  }, [data, searchText]);

  const renderItem = (item: Item, index: number) => {
    const isSelected = item.selected === "true";
    const isOrange = item.color === "orange";

    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() => toggleSelect(index)}
        className="flex justify-center items-center p-4 h-[90px] w-[90px] rounded-2xl"
        style={{
          borderWidth: isSelected ? 0 : 4,
          borderColor: isOrange ? '#f97316' : '#8b5cf6',
          backgroundColor: isSelected 
            ? (isOrange ? '#f97316' : '#8b5cf6') 
            : 'transparent',
        }}
      >
        <Text
          className="font-estedadBold text-[16px]"
          style={{
            color: isSelected ? 'white' : (isOrange ? '#f97316' : '#8b5cf6'),
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  // ساخت ردیف‌ها از دیتای فیلتر شده
  const rows = [];
  for (let i = 0; i < filteredData.length; i += 3) {
    rows.push(filteredData.slice(i, i + 3));
  }

  return (
    <ScrollView className="flex-1 w-full p-4">
      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          className="flex mb-4 flex-row-reverse justify-between h-[90px] w-full"
        >
          {row.map((item, idx) => renderItem(item, rowIndex * 3 + idx))}

          {row.length < 3 &&
            Array.from({ length: 3 - row.length }).map((_, emptyIdx) => (
              <View key={`empty-${emptyIdx}`} className="w-[90px]" />
            ))}
        </View>
      ))}

      {filteredData.length === 0 && (
        <View className="flex items-center justify-center py-10">
          <Text className="font-estedadMedium text-gray-500 text-[16px]">
            آیتمی یافت نشد
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default function AddStudents() {
  const router = useRouter();

  const [gender, setGender] = useState(true);     // true = دختر
  const [loc, setLoc] = useState(true);           // true = محبین
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [searchText, setSearchText] = useState(""); // نام متغیر رو واضح‌تر کردم

  // فرمت شماره تلفن
  const formatPhone = (text: string): string => {
    let cleaned = text.replace(/\D/g, "");
    if (!cleaned) return "";
    if (!cleaned.startsWith("0")) cleaned = "0" + cleaned;
    cleaned = cleaned.slice(0, 11);

    const part1 = cleaned.slice(0, 4);
    const part2 = cleaned.slice(4, 7);
    const part3 = cleaned.slice(7, 11);

    return [part1, part2, part3].filter(Boolean).join(" ");
  };

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
              افزودن قرآن آموز
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
            <Text className="font-estedadMedium text-[16px] text-black">جنسیت</Text>
            <View className="w-full flex flex-row-reverse gap-3 justify-between h-[54px]">
              <TouchableOpacity 
                onPress={() => setGender(true)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  gender ? "bg-red-500 text-white" : "border-2 border-red-500"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${gender ? "text-white" : "text-red-500"}`}>
                  دختر
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setGender(false)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  !gender ? "bg-blue-700 text-white" : "border-2 border-blue-700"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${!gender ? "text-white" : "text-blue-700"}`}>
                  پسر
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* مکان */}
          <View className="w-full mb-3 flex gap-2 items-center">
            <Text className="font-estedadMedium text-[16px] text-black">مکان</Text>
            <View className="w-full flex flex-row-reverse gap-3 justify-between h-[54px]">
              <TouchableOpacity 
                onPress={() => setLoc(true)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  loc ? "bg-teal-600 text-white" : "border-2 border-teal-600"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${loc ? "text-white" : "text-teal-600"}`}>
                  محبین
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setLoc(false)}
                className={`flex-1 h-full rounded-xl flex items-center justify-center font-estedadBold text-[16px] ${
                  !loc ? "bg-orange-600 text-white" : "border-2 border-orange-600"
                }`}
              >
                <Text className={`font-estedadBold text-[16px] ${!loc ? "text-white" : "text-orange-600"}`}>
                  اتابک
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* نام و سن */}
          <View className="w-full mb-3 h-[46px] gap-3 flex flex-row-reverse">
            <View className="flex-1 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl">
              <TextInput 
                className="h-full w-full outline-none border-none font-estedad text-[14px] text-right px-3" 
                style={{ direction: "rtl" }} 
                placeholder="نام و نام خانوادگی" 
              />
            </View>
            <View className="w-16 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl">
              <TextInput 
                inputMode="numeric" 
                value={age} 
                onChangeText={setAge}
                className="h-full w-full outline-none border-none font-estedad text-[14px] text-right px-3" 
                style={{ direction: "rtl" }} 
                placeholder="سن" 
              />
            </View>
          </View>

          {/* شماره تلفن */}
          <View className="w-full mb-3 h-[46px] gap-3 flex flex-row-reverse">
            <View className="flex-1 flex justify-end items-center h-full bg-white border border-gray-300 rounded-xl">
              <TextInput
                value={formatPhone(tel)}
                onChangeText={(text) => {
                  let cleaned = text.replace(/\D/g, "");
                  if (!cleaned) {
                    setTel("");
                    return;
                  }
                  if (!cleaned.startsWith("0")) cleaned = "0" + cleaned;
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

          {/* جستجو */}
          <View className="w-full h-11 bg-white border border-gray-300 mb-2 rounded-2xl flex-row-reverse items-center px-4 gap-2">
  <SearchIcon width={18} height={18} />
  <TextInput
    className="flex-1 text-black text-right font-estedadMedium"
    value={searchText}
    placeholder="چیا خونده؟"
    onChangeText={setSearchText}
    textAlign="right"
  />
</View>
          {/* کامپوننت آیتم‌ها با جستجو */}
          <MyComponent searchText={searchText} />

          {/* دکمه‌ها */}
          <TouchableOpacity
            className="w-full h-[52px] justify-center items-center relative mt-4"
            onPress={() => router.push("/add-item")}
          >
            <View className="absolute w-full h-full">
              <ButtonBg width="100%" height="100%" preserveAspectRatio="none" />
            </View>
            <Text className="font-estedadBold text-white text-[20px]">
              افزودن آیتم  
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full h-[52px] justify-center items-center relative mt-2"
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