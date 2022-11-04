from server.models import User, db

def seed_users():
    demo = User(email='admin@demo.io', password='password', username='admin', dob='11/29/1997', gender=True)

    db.session.add(demo)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE')
    db.session.commit()
