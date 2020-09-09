import React from 'react';
import { Icon } from 'native-base';
import { View } from 'react-native';

interface Props {
    rating: number;
}

const HeaderMenu: React.FC<Props> = (props) => {
    const stars = Array.apply(null, Array(5));
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end'
            }}>
            {stars.map((_, index) => (
                <Icon
                    key={`${index}`}
                    name="star"
                    type={'FontAwesome'}
                    style={{ fontSize: 13, color: props.rating >= index ? 'white' : 'rgba(255, 255, 255, 0.3)' }}
                />
            ))}
        </View>
    );
}

export default HeaderMenu;
