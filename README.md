# Customizando Login do Admin - Django

## Ordem em que pastas e arquivos devem ficar !
<p> > Crie uma pasta chamada 'admin' dentro de templates, por padrão o django buscara lá </p>

```
Projeto
├── static
└── templates
|   ├── admin
|   │   └── login.html
|   └── index.html
└── manage.py
```

## Como alterar ?
<p>Dentro do arquivo 'login.html', vamos especificar ao sistema qual template estamos querendo modificar</p>

```
<!--Estende o template do django admin para sofrer as modificações a baixo-->
{% extends "admin/login.html" %}
```

<p>Agora só precisamos passar o id ou dependendo a tag</p>

```
<!--Titulo da pagina-->
{% block title %}
    Acessar Conta | Login
{% endblock %}
```
