export default class Input {
  isInputState() {
      let stateValue = false;
      return stateValue
  }
    Input(
        
    ) {
    
}
  inputValidate(
    questionRef,
    option1Ref,
    option2Ref,
    option3Ref,
    option4Ref,
    dpLabel,
    setFieldEmpty,
    isOn,
    setIsOn
  ) {
    if (!questionRef.current.value) {
      setFieldEmpty({
        text: 'Question Field is Empty',
        state: true,
      });
      questionRef.current.focus();
      return false;
    }
    if (!option1Ref.current.value) {
      setFieldEmpty({
        text: 'Option1 Field is Empty',
        state: true,
      });
      option1Ref.current.focus();
      return false;
    }
    if (!option2Ref.current.value) {
      setFieldEmpty({
        text: 'Option2 Field is Empty',
        state: true,
      });
      option2Ref.current.focus();
      return false;
    }
    if (!option3Ref.current.value) {
      setFieldEmpty({
        text: 'Option3 Field is Empty',
        state: true,
      });
      option3Ref.current.focus();
      return false;
    }
    if (!option4Ref.current.value) {
      setFieldEmpty({
        text: 'Option4 Field is Empty',
        state: true,
      });
      option4Ref.current.focus();
      return false;
    }
    if (!dpLabel.current.value) {
      setFieldEmpty({
        text: 'Dropdown Field is Empty',
        state: true,
      });
      setIsOn(!isOn);
      return false;
    }
    this.stateValue = true;
    return true;
  }
}
