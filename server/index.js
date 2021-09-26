const express = require('express')
const webpush = require('web-push')
const cors = require('cors')
const bodyParser = require('body-parser')

const PUBLIC_VAPID = 'BLP7lrV5IUml-xrLeIT7k7J4vSKf32SP9-DksL_fRcx0dT4ECLG6kL-WEl-etVYCviIsYlbxrddsmwgK6jNG8cE'
const PRIVATE_VAPID = 'vXtXYnHLKDTDpSy5e7yP4JraJcYs33qIoG0VRDsjdmQ'

const fakeDatabase = []

const app = express()

app.use(cors())
app.use(bodyParser.json())

webpush.setVapidDetails('mailto:dazelpro@gmail.com', PUBLIC_VAPID, PRIVATE_VAPID)

app.post('/subscription', (req, res) => {
    // const subscription = req.body
    // fakeDatabase.push(subscription)
    console.log('woyS')
    console.log(req.body)
})

app.get('/subscriber', (req, res) => {
    res.send({ 
        success: true, 
        message: 'Berhasil ambil data!',
        data: fakeDatabase
    });
})

app.post('/sendNotification', (req, res) => {
    const notificationPayload = {
        notification: {
            title: 'New Notification',
            body: 'Kamu menerima notifikasi broooo',
            //icon: 'assets/icons/icon-512x512.png',
        },
    }

    const promises = []
    fakeDatabase.forEach(subscription => {
        console.log('fakeDatabase')
        promises.push(
            webpush.sendNotification(
                subscription,
                JSON.stringify(notificationPayload)
            )
        )
    })
    Promise.all(promises).then(() => res.sendStatus(200))
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})