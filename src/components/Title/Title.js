import { display } from "@mui/system"

let styles ={
            fontSize : '20px',
            margin: '20px',            
}

const Title = ({title, children}) => {
    return(
        <div style={styles}>
            {children}
        </div>
    )
}

export default Title