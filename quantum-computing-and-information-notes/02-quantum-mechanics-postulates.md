# Postulates of Quantum Mechanics

## Postulate 1: State Space and State Vector

::: info Postulate 1 — State Space and State Vector

An isolated quantum system is described by a vector in a Hilbert space. Two vectors differing only by a nonzero complex multiplying constant represent the same physical state.

:::

A Hilbert space is a complex vector space equipped with an inner product and complete with respect to the norm induced by that inner product.

It shall be noted that for a given set of orthornormal basis vectors $\{\ket{\psi_i}\}$, we obtain the completeness relation

$$
\sum_{i=1}^n \ket{\psi_i}\bra{\psi_i} = I
$$

where $I$ is the identity operator.

The $i$-th component of the column representation of $\ket{\psi}$ is given by $\braket{\psi_i | \psi}$.

## Postulate 2: Operators

::: info Postulate 2 — Operators

To each dynamical variable there corresponds a unique hermitian operator.

:::

The matrices corresponding to hermitian operators have real eigenvalues.

## Postulate 3: Poisson bracket

::: info Postulate 3 — Poisson bracket

If $\hat{A}$ and $\hat{B}$ are hermitian operators corresponding to classical dynamical variables a and b then the commutator of $\hat{A}$ and $\hat{B}$ is given by_


$$
[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A} = i \hbar \{a, b \}
$$

where $\{a, b \}$ is the classical Poisson bracket of $a$ and $b$, representing an operator and $\hbar = h/2\pi$, where $h$ is the Planck's constant.

:::

## Postulate 4: Measurement Postulate

Let $\hat{A}$ be an observable. According to postulate 2, it must be a Hermitian operator. Let $a_i$ be its eigenvalues and $\ket{a_i}$ the corresponding eigenvectors:

$$
\hat{A}\ket{a_i} = a_i \ket{a_i}, \quad i = 1, 2, \dots, n.
$$

Since $\hat{A}$ is Hermitian, its eigenvalues are real, and its eigenvectors can be chosen to form an orthonormal basis satisfying the completeness relation

$$
\sum_{i=1}^n \ket{a_i}\bra{a_i} = I
$$

::: info Postulate 4 — Measurement Postulate

Each act of measurement of an observable_ $\hat A$ on a system in state $\ket{\psi}$:

1. Gives one of the eigenvalues $a_i$ of $\hat A$ as the outcome.
2. When $a_i$ is observed, the system collapses to the eigenstate $\ket{a_i}$ corresponding to the eigenvalue $a_i$.
3. The probability of observing $a_i$ as the outcome of measurement is $|\langle a_i|\psi\rangle|^2$.

:::

The average value of measurement of $\hat{A}$, denoted by $\langle \hat{A} \rangle$ is

$$
\langle \hat{A} \rangle = \sum_i a_i |\braket{a_i | \psi}|^2 = \braket{\psi  | \hat{A} | \psi}.
$$

Now, consider the state $\ket{\psi'} = \exp(i\theta)\ket{\psi}$, where $\theta$ is real. We find,

$$
|\braket{a_i | \psi'}|^2 = |\braket{a_i | \psi}|^2
$$

Similarly,

$$
\braket{\psi' | \hat{A} | \psi'} = \braket{\psi | \hat{A} | \psi}
$$

Thus, multiplying factor $\exp(i \theta)$ called _phase factor_ gives the same measurement probabilities and expectation values, and thus $\ket{\psi'}$ and $\ket{\psi}$ differring by a phase factor represent same state.

## Postulate 5: Time Evolution

::: info Postulate 5 — Time Evolution

The time evolution of a state $\ket{\psi}$ is governed by the Schrodinger equation

$$
i \hbar \frac{d}{dt}\ket{\psi(t)} = \hat{H} \ket{\psi(t)}
$$

where $\hat{H}$ is hermitian operator associated with total energy of the system.

:::

For a time-independent Hamiltonian $\hat{H}$, the solution is given by

$$
\ket{\psi(t)} = \exp(-i \hat{H} t / \hbar) \ket{\psi(0)}
$$

describing the evolution of the state with time.

We define

$$
\hat{U}(t) = \exp(-i \hat{H}t/\hbar)
$$

where $\hat{U}(t)$ is called _time evolution operator_, and one can show that $\hat{U}(t)$ is unitary. Hence, time evolution is a unitary transformation.
