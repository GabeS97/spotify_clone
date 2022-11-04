# can import server because __init__.py makes directory a package
from server import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
