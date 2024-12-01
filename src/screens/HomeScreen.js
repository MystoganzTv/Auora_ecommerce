import { SafeAreaView } from 'react-native';
import WelcomeComponent from '../components/WelcomeComponent';
import HomeCarouselComponent from '../components/HomeCarouselComponent';
import HomeHeadingComponent from '../components/HomeHeadingComponent';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <WelcomeComponent />
      <HomeCarouselComponent />
      <HomeHeadingComponent />
    </SafeAreaView>
  );
};
export default HomeScreen;
