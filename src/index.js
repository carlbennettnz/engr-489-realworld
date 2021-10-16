const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const agent = require('./helpers/agent')
const user = require('./helpers/user')
const unpromise = require('./helpers/unpromise')
const display = require('./helpers/display')

const home = require('./routes/home')
const article = require('./routes/article')
const profile = require('./routes/profile')
const profileFavorites = require('./routes/profile-favorites')
const editor = require('./routes/editor')
const register = require('./routes/register')
const settings = require('./routes/settings')
const login = require('./routes/login')
const logout = require('./routes/logout')

const parseBody = express.urlencoded({ extended: true })

const app = express()

const reactBuildDir = path.join(__dirname, '../build')
app.use('/components/react', express.static(reactBuildDir))

app.use(cookieParser())
app.use(agent)
app.use(user)

app.get('/', unpromise(home), display('Home'))
app.get('/article/:id', unpromise(article.get), display('Article'))
app.post('/article/:id/delete', unpromise(article.delete))
app.post('/article/:id/favorite', unpromise(article.favorite))
app.post('/article/:id/unfavorite', unpromise(article.unfavorite))
app.post('/article/:id/comments', parseBody, unpromise(article.postComment))
app.post('/article/:articleId/comments/:commentId/delete', unpromise(article.deleteComment))

app.get('/@:username', unpromise(profile.get), display('Profile'))
app.get('/@:username/favorites', unpromise(profileFavorites), display('ProfileFavorites'))
app.post('/@:username/follow', unpromise(profile.follow))
app.post('/@:username/unfollow', unpromise(profile.unfollow))

app.get('/register', display('Register'))
app.post('/register', parseBody, unpromise(register), display('Register'))

app.get('/editor', unpromise(editor.get), display('Editor'))
app.get('/editor/:id', unpromise(editor.get), display('Editor'))
app.post('/editor', parseBody, unpromise(editor.post), unpromise(editor.get), display('Editor'))
app.post('/editor/:id', parseBody, unpromise(editor.post), unpromise(editor.get), display('Editor'))

app.get('/settings', display('Settings'))
app.post('/settings', parseBody, unpromise(settings), display('Settings'))

app.get('/login', display('Login'))
app.post('/login', parseBody, unpromise(login), display('Login'))
app.get('/logout', logout)

app.listen(3100)
console.log('listening on 3100')
