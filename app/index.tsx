import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

import GroupBg from "../assets/Group1.svg";
import BriefcasePink from "../assets/briefcasePink.svg";
import BriefcaseBlue from "../assets/briefcaseBlue.svg";
import UserOctagon from "../assets/user-octagon.svg";
import BookIcon from "../assets/book.svg";
import BriefcaseIcon from "../assets/briefcase.svg";

export default function Home() {
  const router = useRouter();

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
          <TouchableOpacity
            className="w-full h-[96px] flex items-center justify-center rounded-[19px] bg-[#E7F3FF]"
            onPress={() => router.push("/students")}
          >
            <Text className="font-estedad text-[19px] leading-[30px] text-black">
              قرآن آموزان
            </Text>
          </TouchableOpacity>

          <View className="w-full h-auto flex gap-6">
            <View className="w-full min-h-[32px] flex flex-row-reverse items-center justify-between">
              <Text className="font-estedadBold text-[19px] leading-[30px]">
                آیتم های خواندنی
              </Text>
              <Text className="font-estedadMedium text-[14px] leading-[22px] text-gray-600">
                دیدن همه
              </Text>
            </View>
            <View className="h-28 w-full flex flex-row-reverse justify-between gap-4">
              <View className="bg-[#FFE7F5] h-full flex-1 rounded-[19px] p-[15px] gap-1">
                <View className="w-full min-h-[32px] flex flex-row-reverse items-center justify-between">
                  <Text className="font-estedadLight text-gray-600 text-[16px] leading-[24px]">
                    غیره
                  </Text>
                  <View className="h-6 w-6 rounded-[7px] bg-[#FFD7EB] flex items-center justify-center">
                    <BriefcasePink width={16} height={16} />
                  </View>
                </View>
                <Text className="text-right text-[22px] leading-[34px] font-estedadBold text-black">
                  150 مورد
                </Text>
                <View className="w-full h-[6px] rounded-[3px] bg-white">
                  <View className="w-[40%] h-full bg-[#F478B8] rounded-[3px]" />
                </View>
              </View>
              <View className="bg-[#E7F3FF] h-full flex-1 rounded-[19px] p-[15px] gap-1">
                <View className="w-full min-h-[32px] flex flex-row-reverse items-center justify-between">
                  <Text className="font-estedadLight text-gray-600 text-[16px] leading-[24px]">
                    سوره ها
                  </Text>
                  <View className="h-6 w-6 rounded-[7px] bg-[#CBE5FF] flex items-center justify-center">
                    <BriefcaseBlue width={16} height={16} />
                  </View>
                </View>
                <Text className="text-right text-[22px] leading-[34px] font-estedadBold text-black">
                  114 مورد
                </Text>
                <View className="w-full h-[6px] rounded-[3px] bg-white">
                  <View className="w-[60%] h-full bg-[#0087FF] rounded-[3px]" />
                </View>
              </View>
            </View>
          </View>

          <View className="w-full h-auto flex gap-6">
            <View className="w-full min-h-[32px] flex flex-row-reverse items-center justify-center">
              <Text className="font-estedadBold text-[19px] leading-[30px]">
                خروجی پایگاه داده
              </Text>
            </View>
            <View className="w-full flex gap-3 h-[144px]">
              <View className="h-[66px] gap-3 w-full flex flex-row-reverse justify-between">
                <TouchableOpacity className="h-full flex-1 flex flex-row-reverse justify-between items-center bg-white shadow-md rounded-2xl p-5">
                  <Text className="font-estedadMedium text-[17px] leading-[26px]">DB</Text>
                  <View className="h-[34px] w-[34px] rounded-[9px] bg-[#EDE4FF] flex items-center justify-center">
                    <UserOctagon width={18} height={18} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="h-full flex-1 flex flex-row-reverse justify-between items-center bg-white shadow-md rounded-2xl p-5">
                  <Text className="font-estedadMedium text-[17px] leading-[26px]">
                    Excel
                  </Text>
                  <View className="h-[34px] w-[34px] rounded-[9px] bg-[#FFE6D4] flex items-center justify-center">
                    <BookIcon width={18} height={18} />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="h-[66px] w-full flex flex-row-reverse justify-between items-center bg-white shadow-md rounded-2xl p-5">
                <Text className="font-estedadMedium text-[17px] leading-[26px]">PDF</Text>
                <View className="h-[34px] w-[34px] rounded-[9px] bg-[#FFE6D4] flex items-center justify-center">
                  <BriefcaseIcon width={18} height={18} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-full h-auto flex gap-6">
            <View className="w-full min-h-[32px] flex flex-row-reverse items-center justify-center">
              <Text className="font-estedadBold text-[19px] leading-[30px]">
                فراخوانی پایگاه داده
              </Text>
            </View>
            <TouchableOpacity className="h-[66px] w-full flex flex-row-reverse justify-between items-center bg-white shadow-md rounded-2xl p-5">
              <Text className="font-estedadMedium text-[17px] leading-[26px]">DB</Text>
              <View className="h-[34px] w-[34px] rounded-[9px] bg-[#EDE4FF] flex items-center justify-center">
                <UserOctagon width={18} height={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
