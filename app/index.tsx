import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import "@/global.css";

function index() {
  const [count, setCount] = useState(100);
  const [edit, setEdit] = useState(false);
  const textInputRef = useRef<TextInput>(null);

  function handleSub() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function showEdit() {
    setEdit(true);
    textInputRef.current?.focus();
  }

  const handleEdit = (v: string) => {
    setCount(Number(v));
  };

  const handleEditDone = () => {
    setEdit(false);
  };

  return (
    <ScrollView className="h-full p-12">
      <View className="flex flex-col items-center justify-center h-full w-full">
        <View className="w-full flex flex-row items-center justify-center">
          {/* <Image source={require('@/assets/images/bismillahi.png')} style={{width: 320, height: 100}} /> */}
          <Text className="text-center text-xl">
            يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا ۝
            وَسَبِّحُوهُ بُكْرَةً وَأَصِيلا ۝
          </Text>
        </View>

        <View className="my-8 relative w-full">
          <View className="flex items-center justify-center">
            <View className="w-48 h-48 border font-bold text-3xl rounded-full">
              <Pressable
                className="w-full h-full flex items-center justify-center"
                onLongPress={showEdit}
              >
                {edit ? (
                  <TextInput
                    ref={textInputRef}
                    className="text-4xl"
                    numberOfLines={1}
                    value={String(count)}
                    keyboardType="number-pad"
                    returnKeyLabel="OK"
                    onChangeText={handleEdit}
                    onSubmitEditing={handleEditDone}
                  />
                ) : (
                  <Text className="text-6xl truncate line-clamp-1">
                    {count}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>

          <View className="absolute h-full right-0">
            <View className="h-full flex items-center justify-center gap-4">
              <Pressable>
                <FontAwesome5 name="th-list" size={24} color="gray" />
              </Pressable>
              <Pressable>
                <FontAwesome name="gear" size={28} color="gray" />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-center">
          <View className="flex items-end w-full">
            <Pressable
              className="size-16 flex items-center justify-center bg-rose-500 rounded-full"
              onPress={handleSub}
              onLongPress={() => setCount(0)}
            >
              <Text className="text-2xl text-center text-white">-</Text>
            </Pressable>
          </View>
        </View>

        <View className="flex-1 w-full flex items-center justify-center">
          <Pressable
            className="size-48 flex items-center justify-center bg-green-500 rounded-full"
            onPress={() => setCount(count + 1)}
          >
            <Text className="text-6xl text-center text-white">+</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default index;
