from twilio.rest import Client

account_sid = 'ACf1bcdd507ecd05e815970502db7a4d7b'
auth_token = '80644aecbb43603c920cc24d777a79a4'
mydata = Client(account_sid, auth_token)

def sms():
    message = mydata.messages.create(
        from_='+15642342984',
        to='+919710192201',
        body='!!!ALERT!!!'
    )
    
def call():
    call = mydata.calls.create(
                            twiml='<Response><Say voice="alice">  This to say your dead line is going to end.Thankyou </Say></Response>',
                            to='+91 97101 92201',
                            from_='+15642342984'
                        )
    # print(message.sid)
    print(call.sid)