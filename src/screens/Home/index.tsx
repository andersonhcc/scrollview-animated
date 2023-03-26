import React, { useState, useRef } from 'react';
import { Text, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { ProgressBar } from '../../components/ProgressBar';
import { styles } from './styles';

type ScrollProps = {
    layoutMeasurement: {
        height: number,
    };
    contentOffset: {
        y: number,
    };
    contentSize: {
        height: number,
    };
}

const Home: React.FC = () => {
    const [percentageValue, setPercentageValue] = useState(0);
    const dimensions = useWindowDimensions();
    const scrollRef = useRef<ScrollView>(null);

    const scrollPercentage = ({ contentOffset, contentSize, layoutMeasurement }: ScrollProps) => {
        const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);

        const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
        setPercentageValue(value < visibleContent ? 0 : value);
    }

    const handleOnMoveTop = () => {
        scrollRef.current?.scrollTo({y: 0, x: 0, animated: true});
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                onScroll={(e) => scrollPercentage(e.nativeEvent)}
                scrollEventThrottle={16}
            >

                <Text style={styles.title}>Titulo do texto</Text>
                <>
                    <Text style={styles.subtitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                    </Text>


                    <Text style={styles.subtitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                    </Text>

                    <Text style={styles.subtitle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, esse eius. Omnis nostrum quia, dolor vitae optio fuga similique est ipsum dolore porro perferendis excepturi, eos quas itaque totam voluptate.
                    </Text>

                </>
            </ScrollView>

            <ProgressBar 
            value={percentageValue} 
            onMoveTop={handleOnMoveTop}
            />

        </SafeAreaView>
    );

};

export { Home };