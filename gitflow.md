O que é Git Flow?

É um fluxo de trabalho para o Git criado para facilitar o processo de desenvolvimento com uma série de comandos novos. O nome por trás desse modelo é Vincent Driessen que, em 2010, escreveu em seu blog pessoal a maneira que ele pensou ser a mais simples de se trabalhar com o Git em larga escala.

Mesmo sendo um método que auxilia o nosso trabalho devemos ter algumas ressalvas diante de como é aplicado: se usado de maneira inadequada, o Git Flow pode se tornar bastante ineficiente e gerar uma experiência não muito agradável.

Além disso, existe um repositório no GitHub onde podemos ver o código aberto do modelo criado. O código em si é feito todo em Shell e o commit mais recente foi de 2012 (muito tempo atrás, né).

Na imagem a seguir, vemos a estrutura de como é o fluxo do Git Flow:
Imagem representando o fluxo do Git Flow
Como funciona e quais os branches do fluxo Git Flow?

O primeiro passo para entender o Git Flow é compreender o funcionamento das branches (ramos) que são estabelecidas por padrão. Com elas, além de conseguirmos uma nomenclatura simples e arranjada, temos a categorização que as torna mais objetivas e de fácil entendimento para pessoas de fora do projeto.
Branch Main/Master

Principal branch, contém associadas a ela as versões de publicação para facilitar o acesso e a busca por versões mais antigas. Também entendemos que é o espelho do programa que está no ar, já que o último código dessa branch deve sempre estar em produção. Além do mais, a única maneira de interagir com essa branch é através de uma Hotfix ou de uma nova Release.
Branch Develop

É uma das principais branches e serve como uma linha com os últimos desenvolvimentos. Como visto na imagem, é uma cópia da branch principal contendo algumas funcionalidades que ainda não foram publicadas. Sendo assim, é a base para o desenvolvimento de novas features.
Branch Feature

Uma das branches temporárias e auxiliares do nosso fluxo, sendo a branch que contém uma nova funcionalidade específica para a nossa aplicação. Nela temos a convenção do nome feature/nome_do_recurso que será utilizada no nosso fluxo de trabalho. Não podemos esquecer que toda nova Feature começa e termina obrigatoriamente a partir da develop.
Branch Hotfix

Também é uma branch auxiliar e temporária, utilizada quando ocorre algum problema no ambiente de produção no qual a correção deve ser feita imediatamente. Conseguimos com isso solucionar o erro e fazer a mesclagem da solução para as branches main/master e develop para que não ocorra a perda do nosso código.
Branch Release

Por fim, a branch de lançamento do nosso programa. Nela unimos o que está pronto em nossa branch de desenvolvimento e “jogamos” para a branch principal. No mais, é criado uma nova versão etiquetada no nosso projeto para que possamos ter um histórico completo do desenvolvimento.
Comandos do Git Flow

A seguir, vamos olhar os principais comandos do Git Flow, desde a inicialização até o momento de subida para o ambiente em produção. Para que você consiga acompanhar corretamente essa parte, é recomendável que você tenha algum conhecimento básico dos comandos Linux ou até mesmo os comandos CMD do Windows:
Init

É o comando inicial do Git Flow e serve para configurar o repositório com as branches do fluxo padrão. Da mesma forma que você tem que inicializar o git em um novo diretório, esse comando tem o mesmo propósito.
Feature

Dentro desse comando temos algumas ramificações possíveis, como por exemplo:

  ```bash
# development
$ start nome_feature  

```


Comando que inicia uma nova feature, nela temos a criação de uma branch com a nomenclatura feature/nome_feature.

  ```bash
# development
$ finish nome_feature  
```

Comando para encerrar uma feature anteriormente criada, além disso será feito um merge para a branch Develop.


  ```bash
# development
$ publish nome_feature  

```

Se você está trabalhando em equipe e deseja compartilhar a sua nova funcionalidade, esse comando publica no servidor remoto que está configurado no seu Git local.



  ```bash
# development
$ pull nome_feature  

```

Ao contrário da anterior, essa serve para obter uma feature do servidor remoto.
Release

Com a terminologia parecida, veremos os comandos referentes ao lançamento:



  ```bash
# development
$ start nome_release [BASE]  

```

Utilize esse comando para iniciar uma versão baseada na branch de desenvolvimento, aqui você pode passar opcionalmente o código de algum commit para usar como base.


  ```bash
# development
$ publish nome_release   

```

É aconselhável publicar a branch de release após criá-la para permitir commits de outras pessoas desenvolvedoras. O comando é semelhante à publicação de uma nova feature.




  ```bash
# development
$ release track nome_release     

```

Novamente, se você quiser acompanhar alguma versão remota da release, existe esse comando.

finish nome_release

Com esse comando você finaliza e cria uma nova versão, logo em seguida é executada uma série de ações:

    junta a branch na Main/Master;
    cria uma tag com o nome da branch;
    também junta a branch com a Develop;
    por último, apaga a própria branch.



  ```bash
# development
$ Hotfix  

```

-Por fim temos os comandos da Hotfix:


  ```bash
# development
$ hotfix start nome_hotfix [BASENAME]  

```
 A partir do último commit da branch Main/Master cria-se uma branch com a nomenclatura de hotfix/nome_hotfix. É obrigatório que seja passado o nome da hotfix e opcionalmente você pode passar um BASENAME.




  ```bash
# development
$ hotfix finish nome_hotfix  

```

Temos novamente o comando para a finalização da hotfix. Quando terminado o processo final vemos que é feito uma mesclagem da hotfix nas branches main/master e develop e também temos a criação de uma etiqueta na main/master.

## Instalação do Git Flow

- Atualmente, o Git Flow já vem incluso nas últimas versões do Git e você consegue baixar o Git em qualquer sistema operacional moderno. No entanto, existem algumas formas de baixar apenas o Git Flow:
Linux

- No Linux temos uma infinidade de sistemas operacionais. Sendo assim, vamos tentar deixar o máximo de comandos possíveis:
Debian




  ```bash
# development with git flow
$ apt-get install git-flow

```

#### Archlinux

  ```bash
# development
$ yay -S gitflow-avh

```

### Fedora

  ```bash
$ sudo dnf install gitflow

```

### Gentoo


  ```bash
$  emerge --ask git-flow

```

### FreeBSD



  ```bash
$ pkg install gitflow

```

## Se mesmo assim você não conseguiu instalar, tente usar esses comandos:

  ```bash
$ curl -OL https://raw.github.com/nvie/gitflow/develop/contrib/gitflow-installer.sh
chmod +x gitflow-installer.sh
sudo ./gitflow-installer.sh

```

### Mac

Também temos bastantes opções nesse caso, como:
Homebrew


  ```bash
$ brew install git-flow

```

### MacPorts 

  ```bash
$ port install git-flow

```

### Wget


  ```bash
$ wget --no-check-certificate -q -O - https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | sudo bash

```



### Curl

  ```bash
$ curl -L -O https://raw.github.com/nvie/gitflow/develop/contrib/gitflow-installer.sh
sudo bash gitflow-installer.sh

```

### Windows

- Chegando ao fim temos essa opção:
### Cygwin

  ```bash
$ wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash

```

