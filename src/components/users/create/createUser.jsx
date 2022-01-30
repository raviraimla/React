import { FormControl, InputLabel, FormHelperText, Input,Button,FormLabel  } from '@mui/material';
const createUser = (props) => {
    return (<div style={{paddingLeft:'10%'}}>
       
        <FormControl>
            <FormLabel  htmlFor="my-input">Name</FormLabel >
            <Input id="my-input" name="name" onChange={props.inputChange} value={props.user.name} aria-describedby="my-helper-text" />
        </FormControl><br/>
        <FormControl>
            <FormLabel  htmlFor="my-input">Email address</FormLabel >
            <Input id="my-input" name="email" onChange={props.inputChange} value={props.user.email} aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl><br/>
        <FormControl>
            <FormLabel  htmlFor="my-input">Mouse</FormLabel >
            <Input id="my-input" name="mouse" onChange={props.inputChange} value={props.user.mouse} onKeyUp={props.checkMouse} aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Enter Mouse serial No.</FormHelperText>
            {props.mouseExist&&<FormHelperText error={true} >Mouse already assigned to other user</FormHelperText>}
        </FormControl><br/>
        <FormControl>
            <FormLabel  htmlFor="my-input">Keyboard</FormLabel >
            <Input id="my-input" name="keyboard" onChange={props.inputChange} value={props.user.keyboard} onKeyUp={props.checkkeyboard} aria-describedby="my-helper-text" />
            <FormHelperText  id="my-helper-text">Enter Keyboard serial No</FormHelperText>
            {props.keyboardExist&&<FormHelperText error={true} >Keyboard already assigned to other user</FormHelperText>}
        </FormControl><br/>
        <FormControl>
        <Button type="button" variant="contained" onClick={props.submitUser}>Submit</Button>
        <br/>
        <Button type="button" variant="contained" onClick={props.cancel}>Cancel</Button>
        </FormControl>
    </div>)
}
export default createUser;