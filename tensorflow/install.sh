https://www.tensorflow.org/install/install_linux

sudo apt-get install python3-pip python3-dev python-virtualenv # for Python 3.n
virtualenv --system-site-packages -p python3 tensorflow # for Python 3.n
source tensorflow/bin/activate
pip3 install --upgrade tensorflow     # for Python 3.n


# From: https://www.tensorflow.org/get_started/mnist/beginners
wget https://github.com/tensorflow/tensorflow/raw/r1.2/tensorflow/examples/tutorials/mnist/mnist_softmax.py

# From: https://www.tensorflow.org/get_started/mnist/pros
wget https://github.com/tensorflow/tensorflow/raw/r1.2/tensorflow/examples/tutorials/mnist/mnist_deep.py

# Nice tutorial:  https://www.oreilly.com/learning/hello-tensorflow
