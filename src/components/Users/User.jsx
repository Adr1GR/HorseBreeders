import React from 'react';
import { Text, Box } from 'rebass';

const User = (props) => {
    return (
        <Box>
            <Text className="title" mb={"5%"} fontSize={32}>
                {props.name}
            </Text>
        </Box>
    )
}   

export default User