# Information Theory

## Information

Consider a random variable $X$ which can take values $x_1, x_2, \dots, x_n$. Let the probability of outcome $x_i$ be $p_i$, that is,

$$
p_i = P(X = x_i) \geq 0
$$

Therefore, we have $\sum_i p_i = 1$.

Let the gain in the information be a function of $p_i$ on learning about an outcome $x_i$. Thus, we define the information gained on occurrence of $x_i$ with $p_i > 0$ as $I(p_i)$.

Consider another random variable $y$ which can take values $y_1, y_2, \dots, y_n$. Let the probability of the outcome $y_i$ is $q_i$.

If $x, y$ are independent, then the joint probability that the outcome of $x$ is $x_i$ and that of $y$ is $y_j$, is given by $p_i q_j$. The information gain in such a case will be $I(p_iq_j)$.

Now, since they are independent events, the information gain from learning both outcomes should be additive and therefore, we have the functional relation

$$
I(p_i q_j) = I(p_i) + I(q_j)
$$

where $0 < p_i, q_j \leq 1$.

On solving this, we obtain

$$
I(p_i) = k \log(p_i)
$$

The choice $k$ and the base of the logarithm is arbitrary. We choose base of the logarithm to be $2$ for the purposes of information theory since it makes calculations more convenient as we are concerned with coding the binary. From now on, $\log$ shall be interpreted as logarithm with base $2$, that is, $\log_2$ for our purposes.

Also, since $p_i <leq 1$, we choose $k = -1$ to have positive information gain.

Therefore,

$$
\boxed{I(p_i) = -\log_2(p_i)}
$$

## Shannon Entropy

Average gain of information over a large number of events is given by

$$
H(X) = \sum_{i : p_i > 0} p_i I(p_i)
$$

where $i : p_i > 0$ is used to denote that we are concerned about only those outcomes with non-zero probability.

Therefore,

$$
\boxed{H(X) = - \sum_{i = 1}^n p_i \log_2(p_i)}, \quad 0 \log 0 \equiv 0
$$

where $\sum_{i=1}^n p_i = 1$

This is known as **Shannon Entropy**.

### Minimum Entropy

If some event takes place with certainty, then we will have one of the $p_i$ to be 1 for that outcome and others zero.

Thus, we will have

$$
H = -[1 \log 1 + 0 \log 0 + \dots + 0 \log 0] = 0
$$

Therefore, the minimum Shannon entropy is $0$.

### Maximum Entropy

If all the $n$ outcomes occur with same probability $p_i = 1/n$, we have

$$
H = - \sum_{i=1}^n \frac{1}{n} \log_2 \left(\frac{1}{n}\right)
$$

Thus, we have

$$
H = \log n
$$

One can establish that this is the maximum value of $H$.

Therefore, $0 \leq H \leq \log n$.

## Information Transfer

Suppose that $k$ bits are required to represent each symbol. In equal length coding, each symbol is represented using its unique representation in $k$ bits and a message of length $N$ will require $Nk$ bits.

The aim is to reduce number of bits required and transfer information effectively.

### Efficient Coding

For doing this, we make use of the fact that different symbols in a message do not necessarily occur with equal probability.

So, for efficient coding, we first determine the probability of occurrence of each symbol and basically assign fewer bits to symbols with higher probability and more bits to symbols with lower probability.

However, simply assigning shorter and longer bit strings is not sufficient. The bit strings must be chosen such that the receiver could uniquely determine the original message from the transmitted bit string.

### Block Coding

In block coding, the symbols are grouped into blocks. Their block probabilities are found and then they are coded using coding algorithms like Huffman coding.

This results in further increase in number of bits required and helps in transferring information more effectively.

### Huffman Coding

Consider a set of $n$ symbols denoted by $\Sigma$. Let the probability of occurrence of $s_i \in \Sigma$ be $p_i$. The Huffman coding algorithm is as follows:

1. Arrange the symbols in descending order of their probabilities as blocks.
2. Choose the least probable combination of two symbols and create an internal parent node with probability that is sum of that of the two children.
3. Repeat until the root node has probability $1$.
4. Traverse the tree from the root to each leaf. Assign a $0$ for every left branch and a $1$ for every right branch to form each character's unique binary code.

Each symbol has an unique path and representation in the tree and therefore, receiver could uniquely determine the original message. This can be shown rigorously too.

Denote the number of bits used to represent symbol $s_i$ as $b_i$.

Number of bits required on an average to represent a symbol is given by $\sum_i {b_i p_i}$. One would observe that this quantity is letter than $k$, which would have been the number of bits required in equal-length coding.

## Typical Sequences

Typical sequences are those which contain any letter the number of times it is predicted by probability of its occurrence. This could be understand formally as follows.

Consider $k$ symbols $s_1, s_2, \dots, s_k$ and their probabilities of occurrence be $p_1, p_2, \dots, p_k$.

Therefore, in a message of $N$ letters, there will be $Np_1$ occurrences of $s_1$, $Np_2$ occurrences of $s_2$, $\dots$, $Np_k$ occurrences of $s_k$.

Number of typical sequences denoted by $N_T$ are

$$
N_T = \frac{N!}{(Np_1)! (Np_2)! \dots (Np_k)!}
$$

Taking logarithm on both sides, we have

$$
\log N_T = \log N! - \sum_{i=1}^k \log(n!), \quad n_i = Np_i
$$

From Sterling's approximation $\log N! \approx N \log N - N$, we have

$$
\begin{aligned}\log N_T &= N \log N - N - \sum_{i=1} (n_i \log n_i - n_i) \\ &= N \log N - N - \sum_{i=1}^k n_i \log n_i + \sum_{i=1}^k n_i \end{aligned}
$$

Now,

$$
\sum_{i=1}^k n_i = N
$$

Therefore,

$$
\begin{aligned}\log N_T &= \left(\sum_{i=1}^k n_i\right) \log N - \sum_{i=1}^k n_i \log n_i \\ &= -\sum_{i=1}^k n_i \log p_i \end{aligned}
$$

Since $n_i = Np_i$, we have

$$
\boxed{\log N_T = N \sum_{i=1}^k(-p_i \log p_i)}
$$

Number of bits needed to represent a symbol on average in such case is therefore

$$
H(\{p_i\}) = \left(-\sum_i p_i \log p_i \right)
$$

This is the fundamental lower limit of the average number of bits needed per symbol for lossless representation of a long message. Informally, this is what the **Shannon's Theorem on Compression** essentially establishes.
