# Quantum Algorithms

## Foundation Quantum Oracle Algorithms

An oracle is an abstract computational device that provides accerss to a function or answers the queries about a given problem while its internal workings are treated to be inaccessible during the analysis. An algorithm queries the oracle to obtain information needed to solve the problem.

Foundation of quantum algorithms demonstrating the power of quantum computing compared to classical computing was laid by the Deutsch-Jozsa algorithm. We here discuss about it and some important and related quantum oracle algorithms.

### Deutsch Algorithm

**Problem**: Given a boolean function

$$
f: \{0, 1\} \to \{0, 1\}
$$

with access to an oracle that evaluates $f(x)$, determine whether $f$ is (A) constant or (B) balanced.

A constant function is such that $f(0) = f(1)$ and a balanced function, here, is such that $f(0) \neq f(1)$ and $f(0) = 1 \oplus f(1)$, $f(1) = 1 \oplus f(0)$.

The idea is that such a problem can be solved making use of the fundamental principles of quantum mechanics, mainly superposition.

Consider two qubits in the state $\ket{0}$. Apply $\hat{X}$ gate to the second qubit and $\hat{H}$ gate to both the qubits. Use them as the inputs to the oracle represented by $\hat{U}_f$, defined as

$$
\hat{U}_f \ket{x}\ket{y} = \ket{x} \ket{y \oplus f(x)}
$$

where $x, y \in \{0, 1\}$.

Thus, after oracle operates, the obtained state will be

$$
\ket{\psi_1} = \frac{1}{2} \left[ \ket{0} \left(\ket{f(0)} - \ket{1 \oplus f(0)}\right) + \ket{1} \left(\ket{f(1)} - \ket{1 \oplus f(1)}\right)\right]
$$

So, (A) if $f(x)$ is **constant**,

$$
\ket{\psi_1} = \left[\frac{1}{\sqrt{2}}\left(\ket{0} + \ket{1}\right)\right]\left[\frac{1}{\sqrt{2}}\left(\ket{f(0)} - \ket{1 \oplus f(0)}\right)\right]
$$

Now, on applying the Hadamard gate on the first qubit, we obtain

$$
\ket{\psi_{out}} = \ket{0} \left[\frac{1}{\sqrt{2}}\left(\ket{f(0)} - \ket{1 \oplus f(0)}\right)\right]
$$

Thus, on measuring the first qubit, we get a certain state $\ket{0}$ in case of a constant function.

For (B) if $f(x)$ is **balanced**,

$$
\ket{\psi_1} = \left[\frac{1}{\sqrt{2}}\left(\ket{0} - \ket{1}\right)\right]\left[\frac{1}{\sqrt{2}}\left(\ket{f(0)} - \ket{1 \oplus f(0)}\right)\right]
$$

Now, on applying the Hadamard gate on the first qubit, we obtain

$$
\ket{\psi_{out}} = \ket{1} \left[\frac{1}{\sqrt{2}}\left(\ket{f(0)} - \ket{1 \oplus f(0)}\right)\right]
$$

Thus, on measuring the first qubit, we get a certain state $\ket{1}$ in case of a balanced function.

```text
|0⟩ ─────H──┌─────┐──H──M
            │     │
|0⟩ ─x───H──│ U_f │──H
            │     │
            └─────┘
```

With the help of such a circuit, we could determine whether $f(x)$ is constant or balanced by measuring the first qubit. The second qubit need not be measured and it is said to be _ancilla_ or _auxillary_ qubit as it is an extra qubit used as a helper.

### Deutsch-Jozsa Algorithm

**Problem**: Given a boolean function with $n$ inputs,

$$
f: \{0, 1\}^n \to \{0, 1\}
$$

with access to an oracle that evaluates $f(x)$, determine whether $f(x)$ is (A) constant or (B) balanced.

A constant function is such that $f(x) = c$ for every $x \in \{0, 1\}^n$ where $c \in \{0, 1\}$ and a balanced function is such that $f(x) = 0$ for exactly $2^{(n-1)}$ inputs and $f(x) = 1$ for the remaining $2^{(n-1)}$ inputs.

$x$ can be represented by

$$
x = \left(x_1, x_2, \dots, x_n \right) = \{x_k\} \in \{0, 1\}^n
$$

Consider $n+1$ qubits in the state $\ket{0}$. Apply $\hat{X}$ to the $n+1$-th qubit and then apply Hadamard gate to all the qubits. Thus,

$$
\ket{\psi_{in}} = \frac{1}{2^{(n+1)/2}} \sum_{\ket{x}\in \{0, 1\}^n}\ket{x} \left(\ket{0} - \ket{1} \right)
$$

Use them as the inputs to the oracle represented by $\hat{U}_f$, defined as

$$
\hat{U}_f\ket{x} \ket{y} = \ket{x} \ket{y \oplus f(x)}
$$

Thus, after oracle operates, the state is given by

$$
\ket{\psi_1} = \frac{1}{2^{(n+1)/2}}  \sum_{\ket{x}\in \{0, 1\}^n} (-1)^{f(x)} \ket{x} \left(\ket{f(x)} - \ket{f(x) \oplus 1} \right)
$$s

Consider applying Hadamard gate on a qubit in state $\ket{x}$. Then,

$$

\hat{H} \ket{x_k} = \frac{1}{\sqrt{2}} \sum_{y_k \in \{0, 1\}} (-1)^{x_ky_k} \ket{y_k}

$$

Thus, we apply Hadamard gate on the first $n$-qubits represented by $\hat{H}^{\otimes n}$ and get

$$

\ket{\psi_{out}} = \frac{1}{2^n} \sum_{x, y \in \{0, 1\}^n} (-1)^{f(x)} (-1)^{x\cdot y} \ket{y} \otimes \frac{\ket{0} - \ket{1}}{\sqrt{2}}

$$

where $x\cdot y = x_0 y_0 \oplus x_1 y_1 \oplus \cdots \oplus x_{n-1}y_{n-1}$.

Thus,

$$

\ket{\psi_{out}} = \left(\sum_{y \in \{0, 1\}^n} A_y \ket{y} \right) \frac{\ket{0} - \ket{1}}{\sqrt{2}}

$$

where

$$

A_y = \frac{1}{2^n} \sum_{x, y \in \{0, 1\}^n} (-1)^{f(x)} (-1)^{x\cdot y}

$$

Now, suppose that via measurement all qubits are measured to be in state $\ket{0}$, so $y = \{0\}^n$.

Then,

$$

\braket{0 | \psi_{out}} = \frac{1}{2^n} \sum_{\{x_k\}} (-1)^{f(x)}

$$




## References
* Deutsch, David. "Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer." Proceedings of the Royal Society of London. Series A, Mathematical and Physical Sciences, vol. 400, no. 1818, 1985, pp. 97–117. JSTOR, doi.org.
* Deutsch, David, and Richard Jozsa. "Rapid Solution of Problems by Quantum Computation." Proceedings of the Royal Society of London. Series A: Mathematical and Physical Sciences, vol. 439, no. 1907, Dec. 1992, pp. 553–58. The Royal Society Publishing, doi.org.
$$
