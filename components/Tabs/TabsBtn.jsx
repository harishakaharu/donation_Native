import { TouchableOpacity, Text } from "react-native";
import React from "react";
import TabsStyles from "./Tabs.style";
import { useDispatch } from "react-redux";
import { updatedSelectCat } from "../../redux/reducers/Categories";

const TabsBtn = ({ tabText, inactiveTab, tabId }) => {
  const dispatch = useDispatch();
  const tabHandler = () => {
    dispatch(updatedSelectCat({ id: tabId }));
  };
  return (
    <TouchableOpacity
      style={[TabsStyles.main, inactiveTab && TabsStyles.disabledStyle]}
      onPress={tabHandler}
    >
      <Text style={[TabsStyles.txt, inactiveTab && TabsStyles.disabledTxt]}>
        {tabText}
      </Text>
    </TouchableOpacity>
  );
};

export default TabsBtn;
