//Instead of calling invokePayByBankApp:
//Add the branded PaybyBankApp button
//Add the method as a button press action
//Expose the PaybyBankApp button as follows:

import { JudoPBBAButton } from 'judo-react-native'
<TouchableOpacity onPress={this.invokePayByBankApp}>
<JudoPBBAButton style={{ flex: 1 }} />
</TouchableOpacity>
