import { Text, SafeAreaView, Image, View } from "react-native";
import {styled} from 'nativewind'
import { HeroImage } from "../../assets";
import { TouchableOpacity } from "react-native";

const StyledViewSafe = styled(SafeAreaView)
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImg = styled(Image)
const StyledButton = styled(TouchableOpacity)

console.log(HeroImage)

export function Home(){
    return(
        <StyledViewSafe className="mt-8">
            <StyledView className="flex-row items-center mb-3">
                <StyledView className="bg-black  w-16 h-16 rounded-full justify-center items-center ml-4">
                    <StyledText className="text-[#4DABB7] text-3xl font-semibold">Go</StyledText>
                </StyledView>
                <StyledText className="text-xl ml-2">
                    Travel
                </StyledText>
            </StyledView>
            <StyledView className="ml-4">
                <StyledText className="text-4xl font-light mb-2">
                    Enjoy the trip with
                </StyledText>
                <StyledText className="text-3xl font-bold text-[#4DABB7] mb-3">
                    Good Moments
                </StyledText>
                <StyledText className="text-base text-justify mr-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste nemo quas cumque labore.
                </StyledText>
            </StyledView>
            <StyledView className=" justify-center items-center ">
                <StyledImg
                    source={require('../../assets/hero.png')}
                    className="self-start"
                />
                <StyledView className="border-4 border-[#4DABB7] absolute rounded-full">
                    <StyledButton className="bg-[#4DABB7] rounded-full h-20 w-20 justify-center items-center m-1">
                        <StyledText className="text-5xl text-white pt-2">GO</StyledText>
                    </StyledButton>
                </StyledView>
            </StyledView>
        </StyledViewSafe>
    )
}
