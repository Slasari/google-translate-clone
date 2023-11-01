import { Form } from 'react-bootstrap'

export const TextArea = () => {
    return (
        <Form.Control 
        as='textarea'
        placeholder='Traduccion'
        style={{height: '150px'}}
        />
    )
}