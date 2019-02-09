#include <Servo.h>

// Different options for spaces

Servo TL;
Servo TR;
Servo ML;
Servo MR;
Servo BL;
Servo BR;

Servo drivers [6] = {TL, ML, BL, TR, MR, BR};
int alphabet [26] = {1, 12, 14, 145, 15, 124, 1245, 125, 24, 245, 13, 123, 134, 1345, 135, 1234, 12345, 1235, 234, 2345, 136, 1236, 2456, 1346, 13456, 1356};

// Read the current letter
// Convert the letter to the ascii value
// Subtract the ascii value - 65 to get the array index of the letter
// Using that array index, get the corresponding braille number
// Using that braille number, raise the correct servos

String input;
char currLetter;
int arrayVal = 0;
int currentServo = 0;

void setup() {
  // put your setup code here, to run once:
  
  TL.attach(7);
  TR.attach(4);
  ML.attach(2);
  MR.attach(3);
  BL.attach(6);
  BR.attach(5);
  Serial.begin(9600);
  clears();
  
  
}


void loop() {
  Serial.println("Enter a word: ");
  while (Serial.available() == 0){
  }
  input = Serial.readString();

  
  input.toUpperCase();
  int i = 0;

  while(i < input.length())
  {
    currLetter = input.charAt(i);
    Serial.println(currLetter);

    if ((int)currLetter == 32){
      Serial.println(" ");
      Serial.println();
      delay(3000);
      i++;
      continue;
    }

    else if ((int)currLetter == 33){
      Serial.println("!");
      Serial.println();
      delay(3000);
      i++;
      continue;
    }

    else if ((int)currLetter == 46){
      Serial.println(".");
      Serial.println();
      delay(3000);
      i++;
      continue;
    }

    else if ((int)currLetter == 63){
      Serial.println("?");
      Serial.println();
      delay(3000);
      i++;
      continue;
    } 
    else{
      Serial.println(alphabet[(int)currLetter - 65]);
      arrayVal = alphabet[(int)currLetter - 65];
      digitSplit(arrayVal);
      i++;
      }
    }
  
}

void digitSplit(int num){
  
  while(num > 0)
  {
    currentServo = num % 10;
    Serial.print(currentServo);
    raiseServo(currentServo);
    num = num / 10;
  }
  Serial.println();
  Serial.println();
  delay(2000);
  clears();
  delay(1000);
  
}
void raiseServo(int number) {
  // Raise the appropriate bumps for this braille letter
  drivers[number - 1].write(10); 
}

void clears(){
  int j = 0;
  while(j < 6)
  {
    drivers[j].write(60);
    j++;
  }
}






