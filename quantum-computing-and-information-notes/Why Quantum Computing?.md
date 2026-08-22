## Introduction to Qubits

Classical computation uses bits which can take values either 0 or 1.  With $n$-bits, one can have $2^n$ possible states. But the system has one actual state at a time. But in Quantum computing, *qubits* are used. 

A qubit is a state just like classical bit. Two possible states for a qubit are $\ket{0}$ and $\ket{1}$. A qubit can be in a state other than $\ket{0}$ and $\ket{1}$ and it is also possible to form linear combinations of states known as *superposition* such that the state of the qubit is described by $$\ket{\psi} = \alpha\ket{0}+\beta{\ket{1}}$$
where $\alpha$ and $\beta$ are complex numbers, and the special states $\ket{0}$ and $\ket{1}$ are known as *computational basis states* and form an *orthonormal basis* for a *two-dimensional complex vector space*. 

When a qubit is "measured", state $\ket{0}$ is obtained with probability $|{\alpha}|^2$  and state $\ket{1}$ is obtained with probability $|\beta|^2$. By normalization, $|\alpha|^2 + |\beta|^2 = 1$.  Hence, the corresponding classical result is either $0$ or $1$. 

A $n$-qubit system has $2^n$ possible amplitudes and they can represent $2^n$ states at a time until measured. They represent $2^n-1$ complex numbers (due to the constraint of normalization).

### Measurement of a qubit

A qubit is said to be measured when any external matter interacts with it to extract information forcing it to collapse its quantum superposition and choose a state either $\ket{0}$ or $\ket{1}$.  

## Challenges

Using qubits in quantum computing leads to several challenges to make quantum computing highly useful.
### The Measurement Problem

The difficult part is determining values $\alpha$ and $\beta$ and use them to extract information. A measurement gives just one outcome and thus no useful information can be obtained by measuring a qubit just once.

Thus, the experiment is performed a very large  $N$ times, and then we have,
$$P(\ket{0}) = |\alpha|^2 = \frac{N_0}{N}$$$$P(\ket{1}=|\beta|^2 = \frac{N_1}{N}$$
where $N_0$ represents number of times the classical result $0$ was measured and $N_1$ when classical result $1$ was measured. 

This is not practically feasible. o 

Thus, **quantum algorithms** must be defined such that they yield a desired answer with high probability of being measured every time so multiple measurements aren't required. 

Developing such algorithms has not been easy and thus quantum computers could solve only limited amount of problems unlike classical computers and thus, classical computers are nowhere soon to be replaced by quantum computers for day-to-day tasks as of now.

#### Efficient Algorithm

Let $L$ be size of input in bits. If using some algorithm, the number of operations required are $L^\alpha$ ($\alpha > 1$), then algorithm is said to be implemented in polynomial time and is said to be efficient. 
But if time taken is $\alpha^L$ ($\alpha > 1$), then it is exponential time and algorithm is said to be not efficient. 

#### Factorization problem 

*Factorization* for numbers formed by multiplication of two very large primes is one problem in which best existing classical algorithm requires $exp((64/9)^{1/3} \cdot L^{1/3} \cdot (\ln L)^{2/3})$ operations whereas *Shor's algorithm*, a quantum algorithm, time is $L^3$. 
### Quantum Decoherence

The ability of a quantum system to exist in a superposition because its underlying quantum waves are "in phase" is called quantum coherence. The following factors can result in its loss which is called quantum decoherence. 
A qubit is prepared by choosing two states in an atom to work with. The higher state is referred to as up and represented by state $\ket{0}$ and lower is referred to as down and represented by $\ket{1}$. But the upper state can collapse to lower state. 
Also, during quantum computing we don't take in account damping, collisions, and several other physically possible factors. 

When the phase relationship gets affected, it is said to be dephasing. *Dephasing* happens due to several possible environmental factors and could happen very quickly depending on how qubits are physically realized. We choose those atoms such that we have a higher dephasing time. The time frame in which phase relationship is maintained is said to be *dephasing time*,

#### Physical Realizations of Qubits

1. *Superconducting qubits*, which offer dephasing time ranging from $10^{-5}$ to $10^{-3}$ seconds
2. *Atoms in optical traps*, which offer dephasing time ranging from $10^{-6}$ to a few seconds and even a minute
3. *Trapped ions*, which offer dephasing time in order of minutes 
4. Silicon Spin Qubits (Quantum dots), offering dephasing time ranging from $10^{-3}$ to several seconds
5. Diamond NV centers, offer a dephasing time of up to a millisecond at room temperature, which stretches to seconds or minutes in cooled environments.
6. *Nuclear magnetic resonance (NMR)*, which offers dephasing time in range of seconds or even years
7. Photonic qubits, which mathematically offer infinite dephasing time
8. Topological qubits, which theoretically offer infinite dephasing time

Current focus is on *superconducting qubits*, *atoms in optical traps* and trapped ions because other realizations have other issues due to which they aren't used.  Photonic qubits which were not used in between after initial experimentation are now being used with a different approach than earlier for specific tasks. Other realizations like quantum dots, diamond NV centers (for quantum sensing) and topological qubits (high-risk, high-reward) have gained modern attention.

### Quantum Error Correction

In classical computing, one can clone the bits and extra bits are used for error correction. A majority vote can be used to determine the true value. In modern methods, *SECDED* is used for classical error correction. It does not use the cloning property of bits and offers error correction using $8$ extra bits protect $64$ data bits, so a total of $72$ bits work for $64$ data bits. 

But, in quantum computing, the "no-cloning theorem" states that cloning qubit is not possible and thus quantum error correction is a major hurdle. Current systems require $100$s to $10000$ extra qubits to protect 1 logical qubit and requiring different complex methods for error correction. 

The concept of SECDED was used to develop a massive class of quantum error correction methods since it doesn't use cloning property of bits, but classical hardware and quantum hardware differ significantly and thus way larger amount of qubits are required for similar methods. 