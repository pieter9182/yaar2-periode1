

void setup() {
  Serial.begin(115200);
}
uint32_t add(){
  static uint32_t A = 0;
  A = A + 3;
  {
    A = A + 4;  
  }
  return A;
  
  
}


void loop() {
  // put your main code here, to run repeatedly:
  uint32_t A = add();
  Serial.println(A);

}
