import { StyleSheet, Text, View, string, number } from "react-native";
import React, { useState } from "react";

//Form Validation
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "should be min of 4 characters")
    .max(16, "should be max of 16 characters")
    .required("Length is required"),
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setuperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength = number) => {
    let characterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }
    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult)
    setIsPassGenerated(ture)
  };

  const createPassword = (characters = string, passwordLength = number) => {
    let result = "";
    for (let i = 0; i < Array.length; i++) {
      const characterIndex = Math.round(Math.random() * charactoers.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setuperCase(false)
    setNumbers(false)
    setSymbols(false)
      
    }
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
