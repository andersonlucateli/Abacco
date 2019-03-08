import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      botao: {
        width: 240,
        height: 50,
        borderWidth: parseInt(props.borda),
        borderColor: props.cor,
        //borderRadius: 15
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a75ff'
      },
      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress} >
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>
            {this.props.titulo}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      desc: '',
      valor: 0,
      venc: ''
    }

    this.state = {
      listData: [/*{ key: 1, desc: 'Telefone', valor: 49.00, venc: '10/09/2019' },
      { key: 2, desc: 'Luz', valor: 190.00, venc: '10/05/2019' },
    { key: 3, desc: 'Pós', valor: 350.00, venc: '30/03/2019' }*/]
    }

    this.clicar = this.clicar.bind(this);
  }

  clicar() {
    let state = this.state;
    if (state.desc == '' || state.valor == 0 || state.venc == '' ||
      state.desc == undefined || state.valor == undefined || state.venc == undefined) {
      alert('Falta preencher alguns campos...');
    } else {
      state.listData.push({ key: 4, desc: state.desc, valor: state.valor, venc: state.venc });

      state.desc = '';
      state.valor = '';
      state.venc = '';


      this.textInputDesc.clear();
      this.textInputValor.clear();
      this.textInputVenc.clear();
    }

    this.setState(state);
  }

  renderItemData(item) {
    return (
      <View style={styles.listView}>
        <Text style={styles.textoTitleView}>Desc. {item.desc}</Text>
        <Text style={styles.textoView}>Valor {item.valor}</Text>
        <Text style={styles.textoView}>Venc. {item.venc}</Text>
      </View>
    );
  }

  render() {
    return (

      <View style={styles.principal}>
        <View style={styles.header}>
          <Text style={styles.texto}>Abacco</Text>
        </View>

        <Text style={styles.textoPrincipal}>Contas a Pagar!</Text>

        <ScrollView>
          <View style={styles.principal}>

            <TextInput style={styles.textoInput} placeholder="Digite o nome da conta..."
              underlineColorAndroid='transparent' onChangeText={(desc) => this.setState({ desc })}
              ref={input => { this.textInputDesc = input }} />
            <TextInput style={styles.textoInput} placeholder="Valor..."
              underlineColorAndroid='transparent' keyboardType='numeric' onChangeText={(valor) => this.setState({ valor })}
              ref={input => { this.textInputValor = input }} />
            <TextInput style={styles.textoInput} placeholder="Vencimento..."
              underlineColorAndroid='transparent' onChangeText={(venc) => this.setState({ venc })}
              ref={input => { this.textInputVenc = input }} />

            <Botao cor='#1a75ff' titulo='Adicionar' onPress={this.clicar} borda='2' />
          </View>

          <FlatList data={this.state.listData} extraData={this.state} renderItem={({ item }) => this.renderItemData(item)} />

        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.texto}>Bem-vindo!</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a75ff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  principal: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  footer: {
    backgroundColor: '#1a75ff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    color: '#ffffff'
  },
  textoPrincipal: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#808080'
  },
  textoInput: {
    fontSize: 15,
    borderWidth: 1,
    marginBottom: 20
  },
  textoTitleView: {
    fontSize: 20,
    color: '#808080',
    fontWeight: 'bold'
  },
  textoView: {
    fontSize: 18,
    color: '#808080'
  },
  listView: {
    marginBottom: 20
  }

});