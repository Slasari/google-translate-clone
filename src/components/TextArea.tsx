import { Form } from 'react-bootstrap'
import { SectionType } from '../types'

type Props =
  | {type: SectionType.From, loading?: undefined, onChange: (value: string) => void, value: string}
  | {type: SectionType.To, loading?: boolean, onChange: (value: string) => void, value: string}

export const TextArea = ({loading, type, value, onChange}) => {
    return (
        <Form.Control 
        as='textarea'
        placeholder='Traduccion'
        style={{height: '150px'}}
        />
    )
}