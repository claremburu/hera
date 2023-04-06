import * as React from "react";
import {
  Appbar,
  Menu,
  Divider,
} from "react-native-paper";
import LoggedInScreen from "../screens/LoggedinScreen";

type Props = {
  navigation: any;
};

const MenuComponent: React.FC<Props> = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleHomePress = () => {
    navigation.navigate("Dashboard");
    closeMenu();
  };

  const handleStaffPress = () => {
    navigation.navigate("Staff");
    closeMenu();
  };

  const handleContinentsPress = () => {
    navigation.navigate("Continents");
    closeMenu();
  };

  return (
      <Appbar.Header>
        <Appbar.Content title="Hera" />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="menu" onPress={openMenu} />}
        >
          <Menu.Item onPress={handleHomePress}  title="Home" />
          <Divider />
          <Menu.Item onPress={handleStaffPress} title="Staff" />
          <Divider />
          <Menu.Item onPress={handleContinentsPress} title="Continents" />
        </Menu>
      </Appbar.Header>
  );
};


export default MenuComponent;
