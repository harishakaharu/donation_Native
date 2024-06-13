import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeStyles from "./WelcomeHome.style";
import WelcomeHdr from "../WelcomeHeader/WelcomeHdr";
import SearchBar from "../SearchBar/SearchBar";
import DonationItem from "../DonationItem/DonationItem";
import { useSelector } from "react-redux";
import highlitedImg from "../../assets/projectImg/highlighted_image.png";
import TabsBtn from "../Tabs/TabsBtn";

const WelcomeHome = () => {
  const userData = useSelector((state) => state.user);
  const { categories, selectedCatId } = useSelector((state) => state.category);
  const { items } = useSelector((state) => state.donation);
  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const categoryPageSize = 4;
  const [catgoryPageList, setCategoryPageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Pagination = (categoryPage, categoryPageSize, items) => {
    const startIndex = (categoryPage - 1) * categoryPageSize;
    const endIndex = startIndex + categoryPageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setIsLoading(true);
    setCategoryPageList(Pagination(categoryPage, categoryPageSize, categories));
    setCategoryPage((prev) => prev + 1);
    setIsLoading(false);
  }, []);

  const handleScroll = () => {
    if (isLoading) {
      return [];
    }
    setIsLoading(true);
    let newData = Pagination(categoryPage, categoryPageSize, categories);
    if (newData.length > 0) {
      setCategoryPageList((prev) => [...prev, ...newData]);
      setCategoryPage((prev) => prev + 1);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    const filteredItems = items.filter((value) =>
      value.categoryIds.includes(selectedCatId)
    );
    setDonationItems([...filteredItems]);
  }, [selectedCatId]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WelcomeHdr
        titleName={`${userData.firstName} ${userData.lastName[0]}. 👋`}
        titleDesc="Hello,"
        profImg={userData.profImg}
      />
      <SearchBar />
      <TouchableOpacity onPress={() => console.log("image pressed")}>
        <Image
          source={highlitedImg}
          resizeMode="cover"
          style={HomeStyles.highlightedImg}
        />
      </TouchableOpacity>
      <View style={HomeStyles.catContainer}>
        <Text style={HomeStyles.selectTxt}>Select Category</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onEndReached={handleScroll}
          onEndReachedThreshold={0.5}
          data={catgoryPageList}
          renderItem={({ item }) => (
            <View style={HomeStyles.tabView} key={item.categoryId}>
              <TabsBtn
                tabText={item.name}
                inactiveTab={item.categoryId !== selectedCatId}
                tabId={item.categoryId}
              />
            </View>
          )}
        ></FlatList>
      </View>
      <View style={HomeStyles.donationItem}>
        {donationItems &&
          donationItems.map((item) => (
            <View
              style={HomeStyles.donationItemContainer}
              key={item.donationItemId}
            >
              <DonationItem
                BadgeTxt={
                  categories.find((data) => data.categoryId === selectedCatId)
                    .name
                }
                donationId={item.donationItemId}
                imageUri={item.image}
                donationTitle={item.name}
                price={Number(item.price)}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default WelcomeHome;
