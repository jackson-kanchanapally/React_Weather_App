import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Stack,
  VStack,
  Heading,
  Input,
  Flex,
  Box,
  Divider,
  Center,
  HStack, Image ,IconButton,Link
} from "@chakra-ui/react";
import loading from "./loading.gif";

import {GoMarkGithub} from 'react-icons/go'




function Weather() {
  const [data, setData] = useState({});
  const [Location, setLocation] = useState("Hyderabad");
  const [Loading, setLoading] = useState(false);

  const searchLocation = (e) => {
    setLocation(e.target.value);
  };
  let a;
  const url = `http://api.weatherapi.com/v1/current.json?key=86e0a232b55f47ed85c185107221905&q=${Location}&aqi=no`;
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setLoading(true);
      a = res.data;
      setData(res.data);
    });
  }, [Location]);

  return (
    <>
      <Flex backgroundColor='gray.900' height="10vh" alignItems="center" justifyContent="end" px={10}>
     
      <Link  href="https://github.com/kanchanapallyjackson"isExternal><IconButton  colorScheme='black' fontSize='25' mr={5} isRound='true' icon={<GoMarkGithub/>} size='md'>
      </IconButton> </Link>
     
    </Flex>


    <Flex
      height="90vh"
      width='100vw'
      // backgroundColor="gray.700"
      // backgroundImage="url('/componets/bg.jpg')"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      justifyContent="center"
      align="center"
    >
    
      <Box
        pt={10}
        borderRadius={["20", "0", "29"]}
        // background="gray.900"
        background="rgba(0, 0, 0, 0.87)"
        height={["80vh", "90vh", "70vh", "70vh"]}
        // width="80vw"
        width={["93%", "90%", "80%", "50%"]}
        justifyContent="center"
        alignItems="center"
        align="center"
        boxShadow="dark-lg"
      >
        {!Loading ? (
          <Image
            mt="5%"
            align="center"
            justifyContent="center"
            boxSize={["",""]}
            objectFit="cover"
            src={loading}
            alt="Loading...."
          ></Image>
        ) : (
          <Box width="90%">
            <Box justifyContent="center" width="80%">
              <Input
                value={Location}
                color="gray.100"
                borderColor="gray.500"
                fontSize="110%"
                borderRadius={15}
                px={10}
                width="100%"
                placeholder="Location"
                size="md"
                my={5}
                onChange={searchLocation}
              />

              <Divider mb={2} color="blackgray.200" />
            </Box>
            <Box>
              <Heading color="gray.200">{data.location.name}</Heading>

              <Stack ml={["0", "10", "25%", "0"]} direction="row" p={4}>
                <Center height="10vw">
                  <Image
                    mt={["198", "200", "58", "0"]}
                    boxSize={["26vw", "23vw", "13vw", "7vw"]}
                    objectFit="cover"
                    src={data.current.condition.icon}
                  ></Image>

                  <Divider
                    height={["120", "120", "90", "81"]}
                    mt={["210", "220", "55", "3"]}
                    mr={1.5}
                    orientation="vertical"
                  />

                  <Heading
                    color="gray.200"
                    mt={["198", "200", "50", "0"]}
                    fontSize={["25vw", "23vw", "10vw", "6vw"]}
                  >{`${data.current.temp_c}°c`}</Heading>
                </Center>
              </Stack>
              <Flex align="flex-start">
                <Box
                  fontSize={["25", "28", "30"]}
                  // pb={10}
                  ml={["46%", "46%", "49%", "22%"]}
                  mt={["120", "120", "3", "-10"]}
                  color="gray.200"
                >
                  {data.current.condition.text}
                </Box>
              </Flex>

              <Stack  mt={['65%','80%','20%','6%']} ml={["-5", "10", "25%", "0"]} direction="row">
                <Center>
                    <Box mt={["-10%", "-85%", "", "-0.5%"]}
                    ml={["10%","20%","30%"]}>
                      <Box color="gray.200">{`Humidity : ${data.current.humidity}`}</Box>
                      <Box color="gray.200">{`Wind Speed : ${data.current.wind_kph} kph`}</Box>
                    </Box>
                  

                    <Divider
                    height={["100", "100", "90", "61"]}
                    mt={["-10", "-95", "55", "0"]}
                    mr={5}
                    ml={5}
                    orientation="vertical"
                  />
                    
                    
                   
                 
                    <Box mt={["-10%", "-20%", "", "-1%"]}>
                      <Box color="gray.200">{`Humidity : ${data.current.humidity}`}</Box>
                      <Box color="gray.200">{`Wind Speed : ${data.current.wind_kph} kph`}</Box>
                    </Box>
               
                    </Center>
              </Stack>
            </Box>
          </Box>
        )}
      </Box>
    </Flex>
    </>
  );
}

export default Weather;
