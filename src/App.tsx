import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";

import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LenguageSelector";
import { SectionType } from "./types.d";

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      
      <Row>
        <Col xs='auto'>
          <Stack gap={2}>
        <LanguageSelector 
        type={SectionType.From}
        value={fromLanguage}
        onChange={setFromLanguage} 
        />
        <Form.Control
        as='textarea'
        placeholder="Introducir texto"
        autoFocus
        style={{height:'150px'}}
        />
        </Stack>
        </Col>
        <Col>
        <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
          <ArrowsIcon />
        </Button>
        </Col>
        <Col xs='auto'>
        <Stack gap={2}>
        <LanguageSelector 
        type={SectionType.To}
        value={toLanguage}
        onChange={(setToLanguage)} 
        />
         <Form.Control
        as='textarea'
        placeholder="Traduccion"
        style={{height:'150px'}}
        />
        </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
