import * as React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Label } from "@fluentui/react/lib/Label";
import Header from "./Header";
import HeroList from "./HeroList";
import Progress from "./Progress";

/* global console, Office, require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
      disabled: Boolean,
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Create certificates. Crie certificados.",
        },
        {
          icon: "QRCode",
          primaryText: "Include custom QRCodes. Inclua QRCodes customizados.",
        },
        {
          icon: "ImageSearch",
          primaryText: "Search and add AlbumMed images. Busque e adicione imagens AlbumMed.",
        },
      ],
      disabled: false,
    });
  }

  click = async () => {
    /**
     * Insert your PowerPoint code here
     */
    Office.context.document.setSelectedDataAsync(
      "Texto adicionado pelo add-in AlbumMed!",
      {
        coercionType: Office.CoercionType.Text,
      },
      (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        }
      }
    );
  };

  insertText = async () => {
    Office.context.document.setSelectedDataAsync(
      "Hello Fluent UI React!",
      {
        coercionType: Office.CoercionType.Text,
      },
      (result) => {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(result.error.message);
        }
      }
    );
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    // Get the language setting for editing document content.
    // To test this, uncomment the following line and then comment out the
    // line that uses Office.context.displayLanguage.
    // const myLanguage = Office.context.contentLanguage;
    // Get the language setting for UI display in the Office application.
    const myLanguage = Office.context.displayLanguage;
    let UIText;
    // Get the resource strings that match the language.
    // Use the UIStrings object from the UIStrings.js file
    // to get the JSON object with the correct localized strings.
    UIText = UIStrings.getLocaleStrings(myLanguage);

    return (
      <div className="ms-welcome">
        <Header
          logo={require("./../../../assets/logo-filled.png")}
          title={this.props.title}
          message={UIText.Greeting}
        />
        <HeroList message={UIText.Introduction} items={this.state.listItems}>
          <p className="ms-font-l">
            Para inserir um texto, clique <b>Inserir</b>.
          </p>
          <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
            Inserir
          </DefaultButton>
          <Label>{UIText.InsertText}</Label>
          <PrimaryButton data-automation-id="test" text={UIText.BotaoTexto} onClick={this.insertText} />
        </HeroList>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};

const UIStrings = (function () {
  "use strict";

  const UIStrings = {};
  // English
  UIStrings.EN = {
    Greeting: "Welcome",
    Introduction: "Discover what you can do here!",
    InsertText: "Click the button to insert text.",
    BotaoTexto: "Insert text...",
    Certificado: "Create certificates.",
    QRCode: "Include custom QRCodes.",
    Imagens: "Search and add AlbumMed images.",
  };
  // Português
  UIStrings.BR = {
    Greeting: "Benvindo",
    Introduction: "Descubra o que pode fazer aqui!",
    InsertText: "Clique o botão para inserir um texto.",
    BotaoTexto: "Inserir texto...",
    Certificado: "Crie certificados.",
    QRCode: "Inclua QRCodes customizados.",
    Imagens: "Busque e adicione imagens AlbumMed.",
  };
  UIStrings.getLocaleStrings = function (locale) {
    let text;
    // Get the resource strings that match the language.
    switch (locale) {
      case "en-US":
        text = UIStrings.EN;
        break;
      case "pt-BR":
        text = UIStrings.BR;
        break;
      default:
        text = UIStrings.EN;
        break;
    }
    return text;
  };
  return UIStrings;
})();
