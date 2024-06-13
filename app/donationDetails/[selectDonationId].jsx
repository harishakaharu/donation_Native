import { View, Text, Image, TouchableOpacity } from "react-native";
import donationDetailsStyles from "./donationDetails.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack, useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import iconURL from "../../assets/extraImages/left.png";
import Badges from "../../components/Badges/Badges";

const donationDetails = () => {
  const nav = useNavigation();
  const { params } = useRoute();
  const { items } = useSelector((state) => state.donation);
  const { categories, selectedCatId } = useSelector((state) => state.category);
  const catValue = categories.find(
    (data) => data.categoryId === selectedCatId
  ).name;
  const item = items.find(
    (data) => data.donationItemId === Number(params.selectDonationId)
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => nav.goBack()}>
                <Image
                  source={iconURL}
                  style={{ height: 30, width: 30 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ),
            headerTitle: "",
          }}
        />
        {item && (
          <View>
            <View style={donationDetailsStyles.imgCont}>
              <Image
                source={{ uri: item.image }}
                style={donationDetailsStyles.headerImg}
                resizeMode="cover"
              />
            </View>
            <View style={donationDetailsStyles.main}>
              <View style={donationDetailsStyles.badge}>
                <Badges BadgeTxt={catValue} />
              </View>
              <View style={donationDetailsStyles.donaTitleCont}>
                <Text style={donationDetailsStyles.donaTitle}>{item.name}</Text>
              </View>
              <View style={donationDetailsStyles.donationInfo}>
                <View>
                  <Text style={donationDetailsStyles.priceTxt}>
                    ${Number(item.price).toFixed(2)}
                  </Text>
                </View>
              </View>
              <View style={donationDetailsStyles.descCont}>
                <Text style={donationDetailsStyles.desc}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default donationDetails;
