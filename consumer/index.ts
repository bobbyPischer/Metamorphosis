import Kafka from 'node-rdkafka'

const consumer = new Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {})

consumer.connect()

consumer.on('ready', () => {
    console.log("consumer ready")
    consumer.subscribe(['my_topic'])
    consumer.consume()
}).on('data', (data) => {
    console.log(`received message: ${data}`)
})