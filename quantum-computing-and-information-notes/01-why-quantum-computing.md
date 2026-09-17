# Why Quantum Computing?

## Introduction to Qubits

Classical computation uses bits which can take values either 0 or 1. With $n$-bits, one can have $2^n$ possible states. But the system has one actual state at a time. But in Quantum computing, _qubits_ are used.

A qubit is the basic unit of quantum information, analogous to the classical bit. Two possible states for a qubit are $\ket{0}$ and $\ket{1}$. A qubit can also form linear combinations of states known as _superposition_ such that the state of the qubit is described by

$$
\ket{\psi} = \alpha\ket{0}+\beta{\ket{1}}
$$

where $\alpha$ and $\beta$ are complex numbers, and the special states $\ket{0}$ and $\ket{1}$ are known as _computational basis states_ and form an _orthonormal basis_ for a _two-dimensional complex vector space_.

When a qubit is "measured", state $\ket{0}$ is obtained with probability $|{\alpha}|^2$ and state $\ket{1}$ is obtained with probability $|\beta|^2$. By normalization, $|\alpha|^2 + |\beta|^2 = 1$. Hence, the corresponding classical result is either $0$ or $1$.

A $n$-qubit system has $2^n$ computational-basis states and a general quantum state is a superposition of these $2^n$ basis states, each with its own complex amplitude.

Quantum computation does not simply provide a faster version of classical computation. Its potential advantage comes from manipulating quantum states through superposition, interference, and entanglement, allowing certain problems to be solved more efficiently than with known classical algorithms.

### Measurement of a qubit

A qubit is measured by interacting with a measurement apparatus, producing a classical outcome. When measured in the computational basis, the state collapses to either $\ket{0}$ or $\ket{1}$.

## Challenges

Using qubits in quantum computing leads to several challenges to make quantum computing highly useful.

### The Measurement Problem

The difficult part is determining values $\alpha$ and $\beta$ and use them to extract information. A measurement gives just one outcome so a single measurement is insufficient to determine the probabilities $|\alpha|^2$ and $|\beta|^2$.

Thus, the experiment is performed a very large $N$ times, and then we have,

$$
P(0) = |\alpha|^2 = \frac{N_0}{N}
$$

$$
P(1)=|\beta|^2 = \frac{N_1}{N}
$$

where $N_0$ represents number of times the classical result $0$ was measured and $N_1$ when classical result $1$ was measured.

This is not practically feasible.

Thus, **quantum algorithms** must be defined such that they yield a desired answer with sufficiently high probability of being measured every time so not infinitely many measurements are required.

Developing such algorithms has not been easy and thus quantum computers could solve only limited amount of problems unlike classical computers and thus, classical computers are nowhere soon to be replaced by quantum computers for day-to-day tasks as of now.

#### Efficient Algorithm

Let $L$ be size of input in bits. If using some algorithm, the number of operations required are $O(L^\alpha)$ ($\alpha \geq 0$ ), then algorithm is said to be implemented in polynomial time and is said to be efficient.
But if number of operations required is $O(\alpha^L)$ ($\alpha > 1$), then it is exponential time and algorithm is said to be not efficient.

#### Factorization problem

_Factorization_ for numbers formed by multiplication of two very large primes is one problem in which best existing classical algorithm requires $exp((64/9)^{1/3} \cdot (L)^{1/3} \cdot (\ln L)^{2/3})$ operations whereas _Shor's algorithm_, a quantum algorithm, can solve the problem in polynomial time , expressed as $O(L^3)$.

### Quantum Decoherence

_Quantum coherence_ refers to the preservation of well-defined phase relationships between the components of a quantum superposition. Loss of this coherence due to interactions with the environment is called _quantum decoherence_.

A qubit, in some physical realizations such as trapped atoms or ions, is prepared by choosing two states in an atom to work with. The higher-energy state may transition to the lower-energy state, resulting in energy relaxation.
During quantum computation, effects such as damping, collisions, and other interactions with the environment can affect the qubit and lead to decoherence.

When the phase relationship gets affected, it is said to be dephasing. _Dephasing_ happens due to several possible environmental factors and could happen very quickly depending on how qubits are physically realized.
The characteristic time over which the phase coherence of a qubit is lost is called the dephasing time. Qubits are therefore engineered or selected to have sufficiently long dephasing times.

#### Physical Realizations of Qubits

1. _Superconducting qubits_, which can offer dephasing time ranging from $10^{-5}$ to $10^{-3}$ seconds
2. _Atoms in optical traps_, which can offer dephasing time ranging from $10^{-6}$ to a few seconds and even a minute
3. _Trapped ions_, which can offer dephasing time in order of minutes
4. Silicon Spin Qubits (Quantum dots), which can offer dephasing time ranging from $10^{-3}$ to several seconds
5. Diamond NV centers, which can offer a dephasing time of up to a millisecond at room temperature, which stretches to seconds or minutes in cooled environments.
6. _Nuclear magnetic resonance (NMR)_, can offer dephasing time in range of seconds or even years
7. Photonic qubits, which can exhibit very long coherence times but face challenges such as photon loss and reliable generation/detection.
8. Topological qubits, which theoretically offer strong protection against certain types of errors but remain experimentally challenging to realize.

Current research is particularly focused on superconducting qubits, trapped ions, and neutral atoms, while other realizations face different technological challenges and are being explored for more specialized applications. Photonic qubits which were not used in between after initial experimentation are now being used with a different approach than earlier for specific tasks. Other realizations like quantum dots, diamond NV centers (for quantum sensing) and topological qubits (high-risk, high-reward) have gained modern attention.

### Quantum Error Correction

In classical computing, bits can be copied, allowing redundancy to be introduced for error correction. For example, a majority vote can be used to determine the true value. In modern methods, _SECDED_ is used for classical error correction, which does not use the cloning property of bits and rather adds redundant parity information for detection of errors. This can use 8 extra bits to protect 64 data bits, giving a total of 72 bits.

But, in quantum computing, the no-cloning theorem prevents an unknown quantum state from being copied perfectly, making quantum error correction more complicated. Current fault-tolerant approaches can require hundreds to thousands of physical qubits to encode and protect one logical qubit, depending on the error rates and error-correction scheme. Thus, it requires different complex methods for error correction.

Quantum error correction uses the idea of introducing redundancy, similar in spirit to classical error correction, but must be designed differently because quantum states cannot be copied directly. Also, quantum errors are fundamentally different from classical bit errors, requiring substantially more physical qubits and more complex error-correction methods.

## Classical vs Quantum Computing

Based on the software challenge of quantum algorithms, one could safely say that developing quantum algorithms is not as easy as classical algorithms and thus quantum computers cannot replace classical computers for daily tasks.

But after all of this, why do we even need quantum computing?

Classical computers can require impractically large amounts of time to solve certain large and computationally difficult problems, including some problems in molecular simulation, cryptography, optimization, and quantum-mechanical simulation.
Quantum computing aims to exploit quantum-mechanical effects to solve certain such problems more efficiently, although significant challenges remain before practical quantum advantage is achieved for many applications.
