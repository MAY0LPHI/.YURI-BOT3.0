# YURI-BOT 3.0

[![Run on Repl.it](https://repl.it/badge/github/ThomasShelby17/.YURI-BOT3.0)](https://repl.it/github/ThomasShelby17/.YURI-BOT3.0)

Bot de WhatsApp desenvolvido com [Baileys](https://github.com/WhiskeySockets/Baileys) (@whiskeysockets/baileys).

## 📋 Requisitos

- **Node.js**: versão 16 ou superior (recomendado: Node.js 18 LTS ou 20 LTS)
- **npm**: gerenciador de pacotes do Node.js
- **ffmpeg**: necessário para processamento de mídia (áudio/vídeo)
- **ImageMagick**: necessário para manipulação de imagens e stickers

### Instalação dos requisitos de mídia

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install ffmpeg imagemagick
```

**macOS (com Homebrew):**
```bash
brew install ffmpeg imagemagick
```

**Windows:**
- Baixe o ffmpeg em [ffmpeg.org](https://ffmpeg.org/download.html) e adicione ao PATH
- Baixe o ImageMagick em [imagemagick.org](https://imagemagick.org/script/download.php)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MAY0LPHI/.YURI-BOT3.0.git
cd .YURI-BOT3.0
```

2. Instale as dependências:
```bash
npm install
```

> **Nota:** Se encontrar conflitos de dependência, use:
> ```bash
> npm install --legacy-peer-deps
> ```

## ▶️ Modos de Execução

### Opção 1: Modo de produção (com código de pareamento)
```bash
npm start
```
- Executa `bash start.sh sim`
- Permite conectar via **código de pareamento** (sem QR Code)
- Útil quando você não tem acesso a outro dispositivo para escanear o QR Code
- Inclui sistema de reinício automático

### Opção 2: Modo de teste (com QR Code)
```bash
npm test
```
- Executa `node connect.js` diretamente
- Exibe QR Code no terminal para escaneamento
- Ideal para primeira configuração e testes

### Opção 3: Usando o script diretamente
```bash
./start.sh        # Modo QR Code
./start.sh sim    # Modo código de pareamento
```

## 🔗 Fluxo de Conexão

### Primeira conexão (QR Code):
1. Execute `npm test` ou `./start.sh`
2. Escaneie o QR Code exibido no terminal com seu WhatsApp
3. A sessão será salva automaticamente em `./arquivos/database/qr-code/`

### Primeira conexão (Código de pareamento):
1. Execute `npm start` ou `./start.sh sim`
2. Digite seu número de telefone quando solicitado (ex: +55 65 9694-7474)
3. Insira o código de pareamento exibido no terminal no seu WhatsApp

## 📁 Estrutura de Diretórios Importantes

| Diretório | Descrição |
|-----------|-----------|
| `./arquivos/database/qr-code/` | Armazena a sessão do WhatsApp (`creds.json`) |
| `./arquivos/database/groups/` | Configurações e dados dos grupos |
| `./arquivos/database/func/` | Dados de usuários e funções |
| `./settings/` | Arquivos de configuração do bot |

## 🔧 Solução de Problemas

### Erro: Cannot find module '@whiskeysockets/baileys'
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Sessão inválida ou desconectada
```bash
# Limpe a sessão e reconecte
rm -rf ./arquivos/database/qr-code/
npm test
```

### Erro de conflito de dependências (peer dependencies)
```bash
npm install --legacy-peer-deps
```

### Bot não responde após conectar
1. Verifique se o ffmpeg está instalado: `ffmpeg -version`
2. Verifique se o ImageMagick está instalado: `convert -version`
3. Confira os logs no terminal para identificar erros específicos

### Erro: ENOTFOUND ou problemas de rede
- Verifique sua conexão com a internet
- Tente novamente após alguns minutos
- Se persistir, pode ser um problema temporário com os servidores do WhatsApp

## 📝 Notas

- O bot possui sistema de reinício automático
- Ao escanear o QR Code, a sessão será salva automaticamente
- Use o modo de código de pareamento quando não tiver acesso a outro dispositivo
- Mantenha o Node.js e as dependências atualizados para evitar problemas

## 📞 Contato

Qualquer dúvida, entre em contato pelo WhatsApp: +55 65 9306-5507
