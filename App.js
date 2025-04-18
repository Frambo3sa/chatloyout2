import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Header, ListItem, Icon, Text, Avatar, SearchBar } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const contatos = [
  { nome: 'Morritz Zimmerman', mensagem: 'Consegui hackear a BonnusLife', tempo: '3 min atrás', avatar: 'https://observatoriodocinema.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?format=.png&quality=91&imagick=uploads-observatoriodocinema.seox.com.br/2025/04/image-1024x691.png' },
  { nome: 'Marteen Holândes Matador', mensagem: 'O prazo acaba amanhã', tempo: '5 min atrás', avatar: 'https://br.web.img3.acsta.net/pictures/22/07/05/10/05/5727754.jpg' },
  { nome: 'Vinyzada do Android', mensagem: 'Cadê você aqui, gelado?', tempo: '1h atrás', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { nome: 'Boyzinha S2', mensagem: 'Não é você, sou eu :(', tempo: '2h atrás', avatar: 'https://static.vecteezy.com/ti/vetor-gratis/t1/18765757-icone-de-perfil-de-usuario-em-estilo-simples-ilustracao-em-avatar-membro-no-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana-vetor.jpg' },
  { nome: 'John Johniss', mensagem: 'E aí safado, vai sexta?', tempo: '5h atrás', avatar: 'https://i1.sndcdn.com/artworks-bPeIciscUXM2pr0Y-yMnJhg-t1080x1080.jpg' },
  { nome: 'Cara da Pelada', mensagem: 'R$300,00 por 2 horas', tempo: 'Ontem', avatar: 'https://simoesfilho.ba.gov.br/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-13-at-09.37.35.jpeg' },
  { nome: 'Galega do Crime', mensagem: 'Tá fazendo o que agora?', tempo: 'Ontem', avatar: 'https://randomuser.me/api/portraits/women/15.jpg' }
];
export default function App() {
  const [search, setSearch] = useState('');

  const updateSearch = (text) => {
    setSearch(text);
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          centerComponent={
            <View style={styles.centrodotopo}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRulDoK4v3q3unfWFobuG57blop8RyeIfLox8jUun5ZAg5ZRrT_y4hMkaw5hbqacLpx3A&usqp=CAU' }}
                style={styles.logochat}
              />
              <Text style={styles.nomechat}>ChatDaResenha</Text>
            </View>
          }
          rightComponent={{ icon: 'check', color: '#fff', onPress: () => alert('todos foram lidos') }}
          leftComponent={<Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} size="small" />}
          containerStyle={styles.header}
        />
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Pesquisar contatos"
            onChangeText={updateSearch}
            value={search}
            lightTheme
            round
            containerStyle={styles.searchBar}
          />
        </View>
        <FlatList
          data={contatos}
          renderItem={({ item }) => (
            <ListItem formacontatos={styles.listItem}>
              <Avatar rounded source={{ uri: item.avatar }} size="medium" />
              <ListItem.Content cadactt={styles.mensaginhas}>
                <ListItem.Title style={styles.nome}>{item.nome}</ListItem.Title>
                <ListItem.Subtitle style={styles.mensagem}>{item.mensagem}</ListItem.Subtitle>
              </ListItem.Content>
              <Text style={styles.tempo}>{item.tempo}</Text>
            </ListItem>
          )}
        />
        <View style={styles.botoesatalhos}>
          <Icon name='home' type='material' />
          <Icon name='chat' type='material' />
          <Icon name='mail' type='material' />
          <Icon name='person' type='material' />
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC000',
  },
  header: {
    backgroundColor: '#333333',
    borderBottomWidth: 0,
  },
  centrodotopo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logochat: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  nomechat: {
    color: '#FFD700',
    fontSize: 18,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#FFEEA8',
    color: '#333333'
  },
  searchBar: {
    backgroundColor: 'transparent',
  },
  listItem: {
    paddingVertical: 12,
    backgroundColor: '#FFC000',
    color: '#FFC000'
  },
  nome: {
    fontWeight: 'bold',
  },
  mensagem: {
    color: '#666',
  },
  tempo: {
    color: '#999',
    fontSize: 12,
  },
  botoesatalhos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    color: '#333333',
    backgroundColor: '#FFD700'
  },
  mensaginhas: {
    color: '#FFC000',
    backgroundColor: '#FFC000'
  }
});
