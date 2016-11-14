<?php

class CaesarCipher
{
    private static $upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    private static $alphabet = "abcdefghijklmnopqrstuvwxyz ";

    public static function encrypt($text, $rotate)
    {
        $resultText = "";
        if ($rotate > 0 && $rotate < 27) {
            for ($i = 0; $i < strlen($text); $i++) {
                if (ctype_upper($text[$i])) {
                    for ($j = 0; $j < strlen(CaesarCipher::$upperAlphabet); $j++) {
                        if ($text[$i] == CaesarCipher::$upperAlphabet[$j]) {
                            $resultText = $resultText . CaesarCipher::$upperAlphabet[($j + $rotate) % strlen(CaesarCipher::$upperAlphabet)];
                        }
                    }
                } elseif (!ctype_upper($text[$i])) {
                    for ($j = 0; $j < strlen(CaesarCipher::$alphabet); $j++) {
                        if ($text[$i] == CaesarCipher::$alphabet[$j]) {
                            $resultText = $resultText . CaesarCipher::$alphabet[($j + $rotate) % strlen(CaesarCipher::$alphabet)];
                        }
                    }
                }
            }
            return $resultText;
        } else return "ERROR!!! Incorrect rotate value!";
    }

    public static function decrypt($text, $rotate)
    {
        $resultText = "";
        if ($rotate > 0 && $rotate < 27) {
            for ($i = 0; $i < strlen($text); $i++) {
                if (ctype_upper($text[$i])) {
                    for ($j = 0; $j < strlen(CaesarCipher::$upperAlphabet); $j++) {
                        if ($text[$i] == CaesarCipher::$upperAlphabet[$j]) {
                            $resultText = $resultText . CaesarCipher::$upperAlphabet[(($j - $rotate) + strlen(CaesarCipher::$upperAlphabet)) % strlen(CaesarCipher::$upperAlphabet)];
                        }
                    }
                } elseif (!ctype_upper($text[$i])) {
                    for ($j = 0; $j < strlen(CaesarCipher::$alphabet); $j++) {
                        if ($text[$i] == CaesarCipher::$alphabet[$j]) {
                            $resultText = $resultText . CaesarCipher::$alphabet[(($j - $rotate) + strlen(CaesarCipher::$alphabet)) % strlen(CaesarCipher::$alphabet)];
                        }
                    }
                }

            }
            return $resultText;
        } else return "ERROR!!! Incorrect rotate value!";
    }

    public static function sendJSON()
    {
        if (isset($_POST['type'])) {
            if ($_POST['type'] == 'decrypt') {
                $text = $_POST['text'];
                $rotate = $_POST['rotate'];
                $response['data'] = self::decrypt($text, $rotate);
                return json_encode($response);
            } elseif ($_POST['type'] == 'encrypt') {
                $text = $_POST['text'];
                $rotate = $_POST['rotate'];
                $response['data'] = self::encrypt($text, $rotate);
                return json_encode($response);
            } else {
                return false;
            }
        }
    }

   /* public static function histData($text)
    {

        $text = strtoupper((string)$text);
        $dat = array('A' => 0, 'B' => 0, 'C' => 0, 'D' => 0, 'E' => 0, 'F' => 0, 'G' => 0, 'H' => 0, 'I' => 0, 'J' => 0, 'K' => 0, 'L' => 0, 'M' => 0, 'N' => 0, 'O' => 0, 'P' => 0, 'Q' => 0, 'R' => 0, 'S' => 0, 'T' => 0, 'U' => 0, 'V' => 0, 'W' => 0, 'X' => 0, 'Y' => 0, 'Z' => 0);
        for($i=0;$i<strlen($text);$i++) {
            $dat[$text[$i]]=substr_count($text,$text[$i]);
        }
        print_r($dat);
        return $dat;
    }*/
}

if (CaesarCipher::sendJSON() !== false) {
    echo CaesarCipher::sendJSON();
}

//$CaesarCipher->histData("laLA");