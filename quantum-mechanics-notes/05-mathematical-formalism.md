# Mathematical Formalism

## State Vectors and Wavefunctions

### Superposition and State Vectors

It is known that if $\psi_1(x)$ and $\psi_2(x)$ are possible solutions of the time-dependent Schrödinger eqation, then their linear combination is also a solution, that is,

$$
\psi(x) = c_1 \psi_1(x) + c_2 \psi_2(x)
$$

where $c_1, c_2 \in \mathbb{C}$.

Vectors too similarly support addition and scalar multiplication. This inspired the approach of treating wavefunctions as vectors in a vector space.

### Dirac Notation

In quantum mechanics, we use the abstract notation called _Dirac Notation_.

The state vector of a quantum mechanical system is represented by $\ket{\psi}$, which is known as a _ket_. The corresponding dual vector associated with the ket $\bra{\psi}$ is known as a _bra_.

The inner product refers to the bra acting on a ket to give a complex scalar. This is represented by $\braket{\phi | \psi}$ where $\ket{\phi}$ and $\ket{\psi}$ are states of the quatnum mechanical system.

### Hilbert Spaces and Representations

The state vectors used to represent a quantum state $\ket{\psi}$ lie in a Hilbert space. It shall be noted that here (or in conventional quantum mechanics,) Hilbert space is defined over the scalar field $\mathbb{C}$.

To denote a wavefunction for a particle moving along a line, we use

$$
\psi(x) = \braket{x | \psi}
$$

where $\ket{x}$ denotes a position eigenstate and $\psi(x)$ gives the probability amplitude associated with the position $x$. Thus, the wavefunction $\psi$ the representation of the abstract state vector $\ket{\psi}$ in the position basis.

The same state can be represented in other bases such as momentum basis. They describe the same quantum state in different representations.

For a particle moving on the real line, a physically admissible wavefunction describing a normalizable state must be square-integrable. Thus, the wavefunction belongs to the space $L^2(\mathbb{R})$, consisting of square-integrable functions satisfying

$$
\int_{-\infty}^{\infty} |\psi(x)|^2 dx < \infty
$$

The space $L^2(\mathbb{R})$ equipped with the inner product, defined between two quantum states $\ket{\phi}$ and $\ket{\psi}$ to be

$$
\braket{\phi | \psi} = \int_{-\infty}^{\infty} \phi^{\ast}(x) \psi(x) dx
$$

forms a Hilbert space.

The norm is defined as

$$
\lVert \psi \rVert = \sqrt{\braket{\psi | \psi}} = \left(\int_{-\infty}^{\infty} |\psi(x)|^2 dx \right)^{1/2}
$$

For physically acceptable wavefunction, its value must be one.

### Inner Products and Orthogonality

For any two state vectors $\ket{f}$ and $\ket{g}$ in a Hilbert space $\mathcal{H}$, the inner product $\braket{f | g}$ is a complex scalar satisfying the following properties:

1. $\braket{g | f} = \braket{f | g}^{{\ast}}$
2. $\bra{g} (a \ket{f_1} + b\ket{f_2}) = a\braket{g | f_1} + b \braket{g | f_2}$, where $a, b \in \mathbb{C}$
3. $\braket{f | f} \geq 0$, with equality if and only if $\ket{f(x)} = 0$

The norm is given by

$$
\lVert f(x) \rVert = \sqrt{\braket{f | f}}
$$

With these properties established, we talk about the following

I. Normalizability

A function $f$ is said to be _normalizable_ if its norm is one, that is, $\braket{f | f} = 1$,

II. Orthogonality and Orthonormality

Two functions $f$ and $g$ are said to be _orthogonal_ if $\braket{f | g} = 0$.

A set of functions $\{f_n\}$ are _orthonormal_ if $\braket{f_m | f_n} = \delta_{mn}$.

III. Completeness

A set of functions $\{f_n\}$ is _complete_ if any other function $f$ in Hilbert space can be expressed as linear combination of them, that is,

$$
f(x) = \sum_n c_n f_n(x)
$$

where $c_n \in \mathbb{C}$.

If the set of functions $\{f_n\}$ forms an orthonormal basis, we get

$$
c_n = \braket{f_n | f}
$$

Therefore,

$$
\ket{\psi} = \sum_n \ket{f_n} \braket{f_n | \psi} = \left( \sum_n \ket{f_n} \bra{f_n} \right) \ket{\psi}
$$

Since this must hold for every $\ket{\psi}$,

$$
\sum_n {\ket{f_n} \bra{f_n}} = I
$$

IV. Projection

Define the projection operator onto $\ket{f_n}$ as

$$
\hat{P}_n = \ket{f_n} \bra{f_n}
$$

This also satisfies

$$
\hat{P}^2 = \hat{P}
$$

So, for a state $\ket{\psi}$,

$$
\hat{P}_n \ket{\psi} = \ket{f_n} \braket{f_n | \psi} = c_n \ket{f_n}
$$

This extracts the component of $\ket{\psi}$ along $\ket{f_n}$. From completeness, we get

$$
\sum_n \hat{P}_n = \sum_n \ket{f_n} \bra{f_n} = I
$$

This works for a discrete orthonormal basis.

For a continuous basis like the position basis, we obtain

$$
\int dx \ket{x} \bra{x} = I
$$

#### Cauchy-Schwarz Inequality

For any two state vectors $\ket{f}, \ket{g} \in \mathcal{H}$,

$$
\boxed{|\braket{f|g}|^2 \leq\braket{f|f}\braket{g|g}}
$$

In the case of square integrable functions $\ket{f}, \ket{g} \in L^2([a, b])$ space, we thus have

$$
\left|\int_{a}^{b} f^{\ast}(x) g(x) dx \right| \leq \left[\int_{a}^{b} |f(x)|^2 dx  \int_{a}^{b} |g(x)|^2 dx \right]^{1/2}
$$

#### Weighted Inner Products

More generally, in Hilbert spaces of square-integrable functions $f$ and $g$, the inner product can be defined with respect to a weight function

$$
\boxed{\braket{f | g} = \int_{a}^{b} f^{\ast}(x)g(x)w(x)dx}
$$

where $w(x)$ is a real-valued function satisfying $w(x) > 0$ almost everywhere (except for vanisihing at some points) and the functions satisfy

$$
\int_{a}^{b} |f(x)|^2 w(x) dx \lt \infty
$$

For example, in the [1D Harmonic Oscillator problem](./03-foundations-of-quantum-mechanics.md#analytic-method), the Hermite polynomials are the functions in the square-integrable space whereas weight function is $w(\varepsilon) = e^{-\varepsilon^2}$.

## Position and Momentum Representations

Consider the momentum operator $\hat{p}$ and position operator $\hat{x}$.

The eigenvalue equation of the momentum operator is given by

$$
\hat{p} \ket{p} = p \ket{p}
$$

Now, in the position representation,

$$
\hat{p} = -i \hbar \frac{d}{dx}
$$

Multiplying the eigenvalue equation from the left by $\bra{x}$, we get

$$
\braket{x | \hat{p} | p} = p \braket{x | p}
$$

and therefore,

$$
-i \hbar \frac{d}{dx} \braket{x | p} = p \braket{x | p}
$$

On solving the differential equation, we obtain

$$
\braket{x | p} = Ce^{ipx/\hbar}
$$

This momentum eigenstate cannot be normalized and therefore, we use dirac delta normalization.

$$
\braket{p | p'} = \delta(p - p')
$$

Thus, using the completeness relation in the position representation, we obtain

$$
\braket{p | p'} = \int_{-\infty}^{\infty} dx \braket{p | x} \braket{x | p'}
$$

On substituting and simplifying we obtain,

$$
|C|^2 (2\pi \hbar) = 1
$$

Therefore, the momentum eigenstate can be expressed in the position representation as

$$
\braket{x | p} = \frac{1}{\sqrt{2\pi \hbar}} e^{ipx/\hbar}
$$

Now consider a general wavefunction denoted by $\ket{\psi(t)}$. On taking its projection in the position basis, we have

$$
\psi(x, t) = \braket{x | \psi(t)}
$$

Using the completeness relation for the momentum operator, we can write

$$
\psi(x, t) = \int dp \braket{x | p} \braket{p | \psi(t)}
$$

Therefore, we get

$$
\psi(x, t) = \frac{1}{\sqrt{2 \pi \hbar}} \int { dp e^{ipx/\hbar} \phi(p, t)}
$$

and similarly, in the momentum representation

$$
\phi(p, t) = \frac{1}{\sqrt{2 \pi \hbar}} \int {dx e^{-ipx/\hbar} \psi(x, t)}
$$

## Operators and Observables

### Linear Operators and Their Action

An operator is a mapping that assigns a vector to another vector, that is,

$$
\hat A: D(\hat{A}) \subseteq\mathcal H\longrightarrow\mathcal H,
$$

where $\hat{A}$ is the operator and $D(\hat{A})$ is the domain (the set of vectors on which it is defined).

In quantum mechanics, operators act on state vectors in a Hilbert space $\mathcal{H}$.

Action of an operator can be represented as

$$
\hat{A} \ket{\psi} = \ket{\phi}
$$

An operator is _linear_ if, its domain $D(\hat{A})$ is a _vector subspace_ of $\mathcal{H}$ and, for any $\ket{\psi}, \ket{\phi} \in D(\hat{A})$ and scalars $\alpha, \beta \in \mathbb{C}$,

$$
\hat{A} ( \alpha \ket{\psi} + \beta \ket{\phi}) = \alpha \hat{A}\ket{\psi} + \beta \hat{A} \ket{\phi}
$$

The position and momentum operators in one dimension are represented by

$$
\hat{x}{\psi(x)} = x\psi(x), \qquad \hat{p} \psi(x) = -i \hbar \frac{d\psi(x)}{dx}
$$

Both operators are linear on their respective domains.

### Adjoint and Self-Adjoint Operators

For a densely defined linear operator $\hat{A}$ on a Hilbert space $\mathcal{H}$, its _adjoint_ denoted by $\hat{A^\dagger}$ is defined through the inner product relation

$$
\braket{\hat{A} \phi | \psi} = \braket{\phi | \hat{A}^{\dagger} | \psi}
$$

for all states $\ket{\phi} \in D(\hat{A}), \ket{\psi} \in D(\hat{A}^{\dagger})$.

An operator is _densely defined_ if its domain is dense in the Hilbert space, meaning that every vector in the Hilbert space can be approximated arbitrarily closely by vectors from its domain.

A linear operator $\hat{A}$ is _symmetric_ (Hermitian) if

$$
\braket{\hat{A} \phi | \psi} = \braket{\phi | \hat{A} | \psi}
$$

for all $\ket{\phi}, \ket{\psi} \in D(\hat{A})$.

These operators have real eigenvalues.

A linear operator $\hat{A}$ is _self-adjoint_ if

$$
\hat{A} = \hat{A}^{\dagger}
$$

that is, the operator and its adjoint have identical domains and their actions agree on every vector in that domain.

In finite-dimensional Hilbert spaces, these self-adjoint operators are commonly known as _Hermitian operators_ and the condition $\hat{A} = \hat{A}^{\dagger}$ is referred to as _Hermiticity_.

### Eigenvalues, Eigenvectors, and Observables

Consider an operator $\hat{A}$ acting on $\ket{a}$ such that

$$
\hat{A} \ket{a} = a \ket{a}
$$

then $a$ is said to be the _eigenvalue_ of $\hat{A}$ and $\ket{a}$ is said to be the corresponding _eigenvector_.

An _observable_ in quantum mechanics is a physical quantity that can be measured experimentally.

The expectation value of an observable $\hat{Q}(\hat{x}, \hat{p})$ for a system in a normalized state $\ket{\psi}$ is given by

$$
\langle Q \rangle = \braket{\psi | \hat{Q} | \psi}
$$

Since the expectation value should be real, we have

$$
\braket{\psi | \hat{Q} | \psi} = \braket{\psi | \hat{Q} | \psi}^{\ast}
$$

Using the properties of adjoint,

$$
\braket{\psi | \hat{Q} | \psi}^{\ast} = \braket{\psi | \hat{Q}^{\dagger} | \psi}
$$

Therefore,

$$
\braket{\psi | (\hat{Q} - \hat{Q}^{\dagger} | \psi)} = 0
$$

If this holds for every state in the common domain, this gives

$$
\boxed{\hat{Q} = \hat{Q}^{\dagger}}
$$

Since a physical measurement must produce a real-valued result, the above conclusion inspires us to represent observables mathematically using Hermitian operators $\hat{Q(\hat{x}, \hat{p})}$, which have real eigenvalues.

#### Eigenvalues and Eigenfunctions of a Hermitian Operator

Consider the two eigenvalue equations for an observable represented using an Hermitian operator $\hat{Q}$,

$$
\hat{Q} f_n = q_n f_n
$$

and

$$
\hat{Q} f_m = q_m f_m
$$

where $f_n, f_m$ are eigenfunctions, $q_n, q_m$ are corresponding eigenvalues.

Taking inner product of the first equation with $f_m$, we get

$$
\braket{f_m | \hat{Q} f_n} = \braket{f_m | q_n f_n}
$$

Now taking the adjoint of expression on left side above and using the property of $\hat{Q}$ that it is Hermitian, we get

$$
\braket{\hat{Q}^{\dagger} f_m | f_n} = q_m^{\ast} \braket{f_m | f_n}
$$

Thus, we get

$$
(q_n - q_m^{\ast}) \braket{f_m | f_n} = 0
$$

If $n = m$, we have

$$
q_n = q_n^{\ast}
$$

so $q_n$ are real.

Thus, the eigenvalue $q_n$ of an observable must be a real number.

This also gives us $q_m^{\ast} = q_m$.

If $n = m$, we have

$$
\braket{f_m | f_n} = 0
$$

since $q_n \neq q_m$.

This demonstrates the orthogonality between the eigenfunctions of the Hermitian operator.

Thus, for a hermitian operator

1. Eigenvalues are real.
2. Eigenfunctions corresponding to distinct eigenvalues are mutually orthogonal.

#### Degeneracy of Eigenvalues

The degeneracy of an eigenvalue is the number of linearly independent eigenvectors associated with the eigenvalue.

If an eigenvalue is degenerate, its linearly independent eigenfunctions can be replaced by another set of linearly independent eigenfunctions corresponding to the same eigenvalue that are mutually orthonormal.

### Properties of Hermitian Operators

Consider two Hermitian operators $\hat{A}$ and $\hat{B}$.

Define a _commutator_ as

$$
[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}
$$

Below are some of the properties of these operators

#### Sum of two Hermitian operators

Define $\hat{C} = \hat{A} + \hat{B}$.

$$
\hat{C^{\dagger}} = (\hat{A} + \hat{B})^{\dagger} = \hat{A} + \hat{B} = \hat{C}
$$

So, $\hat{C}$ and therefore, sum of two Hermitian operators is Hermitian.

#### Product of two Hermitian operators

Define $\hat{C} = \hat{A} \hat{B}$.

$$
\hat{C^{\dagger}} = (\hat{A}\hat{B})^{\dagger} = \hat{B}^{\dagger} \hat{A}^{\dagger} = \hat{B}\hat{A}
$$

If $[\hat{A}, \hat{B}] = 0$, then $\hat{C}^{\dagger} = \hat{C}$, otherwise $\hat{C}^{\dagger} \neq \hat{C}$.

So, product is Hermitian only and only if $\hat{A}$ and $\hat{B}$ commute.

#### Commutators of three Hermitian operators

Consider another Hermitian operator $\hat{C}$.

From definition of a commutator,

$$
[\hat{A}\hat{B}, \hat{C}] = \hat{A}\hat{B}\hat{C} - \hat{C}\hat{A}\hat{B}
$$

Now,

$$
[\hat{A}, \hat{C}] \hat{B} + \hat{A} [\hat{B}, \hat{C}] = \hat{A}\hat{C}\hat{B} - \hat{C}\hat{A}\hat{B} + \hat{A}\hat{B}\hat{C} - \hat{A}\hat{C}\hat{B}
$$

$$
\implies [\hat{A}, \hat{C}] \hat{B} + \hat{A} [\hat{B}, \hat{C}] = \hat{A}\hat{B}\hat{C} - \hat{C}\hat{A}\hat{B}
$$

Therefore,

$$
[\hat{A}\hat{B}, \hat{C}] = [\hat{A}, \hat{C}] \hat{B} + \hat{A} [\hat{B}, \hat{C}]
$$

### Generalized Uncertainty Principle

Consider two Hermitian operators $\hat{A}, \hat{B}$.

Now, for the observable $\hat{A}$, we define the standard deviation in the measure outcome of $\hat{A}$ as

$$
{\sigma_{\hat{A}}}^2 = \langle A^2 \rangle - {\langle A \rangle}^2
$$

Similarly, for the observable $\hat{B}$,

$$
{\sigma_{\hat{B}}}^2 = \langle B^2 \rangle - {\langle B \rangle}^2
$$

Now, note that

$$
\langle \langle \hat{A} \rangle \rangle = \langle \hat{A} \rangle
$$

Thus, we can also write

$$
{\sigma_{\hat{A}}}^2 = \langle (A - \langle A \rangle)^2 \rangle
$$

$$
{\sigma_{\hat{B}}}^2 = \langle (B - \langle B \rangle)^2 \rangle
$$

Now, define functions $f$ and $g$ such that

$$
f = (\hat{A} - \langle A \rangle) \psi
$$

$$
g = (\hat{B} - \langle B \rangle) \psi
$$

So, for a normalized state $\psi$,

$$
\sigma_{\hat{A}} = \braket{\psi | \hat{A}^2 | \psi} - \braket{\psi | \langle A \rangle | \psi}^2 = \braket{\psi | (\hat{A}^2 - {\langle A \rangle}^2) | \psi }
$$

Now, consider $(\hat{A} - \langle A \rangle)^2$.

$$
(\hat{A} - \langle A \rangle)^2 = \hat{A}^2 - 2\langle A \rangle \hat{A} + {\langle A \rangle}^2
$$

Now,

$$
\braket{\psi | (\hat{A} - \langle A \rangle)^2 | \psi} = \langle A^2 \rangle - 2 \langle A \rangle \langle A \rangle + {\langle A \rangle}^2 =  \langle A^2 \rangle - {\langle A \rangle}^2
$$

Therefore,

$$
{\sigma_{\hat{A}}}^2 = \braket{(\hat{A} - \langle A \rangle) \psi | (\hat{A} - \langle A \rangle) \psi \rangle}
$$

which we can rewrite as

$$
\sigma_{\hat{A}}^2 = \braket{f | f}
$$

Similarly,

$$
\sigma_{\hat{B}}^2 = \braket{g | g}
$$

Thus,

$$
\sigma_{\hat{A}}^2 \sigma_{\hat{B}}^2 = \braket{f | f} \braket{g | g} \geq {| \braket{f | g} |}^2
$$

Now,

$$
\braket{f | g} = \braket{\psi | (\hat{A} - \langle A \rangle) (\hat{B} - \langle B \rangle) | \psi}
$$

On simplifying this, we get

$$
\braket{f | g} = \langle AB \rangle - \langle A \rangle \langle B \rangle
$$

Now, $\braket{f | g}$ is a complex number. Thus,

$$
\sigma_{\hat{A}}^2 \sigma_{\hat{B}}^2 \geq | \braket{f | g}|^2 \geq \frac{1}{2i} {[\braket{f | g} - \braket{g | f}]}^2
$$

Note that

$$
\braket{f | g} - \braket{g | f} = \langle [\hat{A}, \hat{B}] \rangle
$$

Therefore,

$$
\boxed{\sigma_{\hat{A}} \sigma_{\hat{B}} \geq \frac{1}{2i} \langle [\hat{A}, \hat{B}] \rangle}
$$

### Generalized Ehrenfest Theorem

Consider a Hermitian operator $\hat{A}$. Thus, the expectation value for a normalized state $\ket{\psi}$ is given by

$$
\langle A \rangle = \braket{\psi | \hat{A} | \psi}
$$

Differentiating with respect to time,

$$
\frac{d\langle A \rangle}{dt} = \frac{d}{dt} \braket{\psi(t) | \hat{A} | \psi(t) }
$$

Now, time-dependent Schrödinger equation is

$$
i \hbar \frac{\ket{\psi}}{dt} = \hat{H} \ket{\psi}
$$

Thus, using this, we obtain

$$
\boxed{\frac{d\langle A \rangle}{dt} = \frac{i}{\hbar} \langle [\hat{H}, \hat{A}] \rangle + \left \langle {\frac{d\hat{A}}{dt}} \right \rangle}
$$

### Energy-Time Uncertainty

Choose two observables represented by the Hermitian operators $\hat{H}$, $\hat{Q}$.

So, we have

$$
\sigma_{\hat{H}}\sigma_{\hat{Q}} \geq \frac{1}{2} | \braket{[\hat{H}, \hat{Q}]} |
$$

For $\hat{Q}$, assume no explicit time dependence in $\hat{Q}$. Thus, from Ehrenfest's theorem,

$$
\frac{d \langle Q \rangle}{dt} = \frac{1}{i\hbar} ([\hat{Q}, \hat{H}])
$$

So, we get

$$
([\hat{H}, \hat{Q}]) = -i\hbar \frac{d\langle Q \rangle}{dt}
$$

On substituting, we obtain

$$
\sigma_{\hat{H}}\sigma_{\hat{Q}} \geq \frac{\hbar}{2} \left| \frac{d\langle Q \rangle}{dt} \right|
$$

Now, we define

$$
\Delta t = \frac{\sigma_{\hat{Q}}}{\left| \frac{d\langle Q \rangle}{dt}\right|}
$$

which represents the time taken by the expectation value of $Q$ to change by one standard deviation.

So on dividing both sides by $$|d\langle Q \rangle/ dt|$$, we get

$$
\sigma_{\hat{H}} \Delta t \geq \frac{\hbar}{2}
$$

Now, $\hat{H}$ is the Hamiltonian, therefore its measurement uncertainty is the uncertainty in energy

$$
\sigma_{\hat{H}} = \Delta E
$$

So, we get

$$
\Delta E \Delta t \geq \frac{\hbar}{2}
$$

For example, for a stationary state, all expectation values are constant, that is,

$$
\frac{d\langle Q \rangle}{dt} = 0
$$

Therefore, $\Delta t \to \infty$. Also, in an energy eigenstate, $\Delta E = 0$. So, the state has no energy uncertainty and its expectation values don't evolve with time.

### Free Particle

A localized wave packet has spatial spread $\Delta x$ and moves with velocity $v$. So, the time for it to move through a distance $\Delta x$ is

$$
\Delta t = \frac{\Delta x}{v}
$$

For a free particle,

$$
E = \frac{p^2}{2m}
$$

Therefore, for a small momentum uncertainty $\Delta p$,

$$
\Delta E = \frac{p}{m} \Delta p
$$

Since for a free particle,

$$
v = \frac{p}{m}
$$

Thus, we get

$$
\Delta E \Delta t = \Delta p \Delta x \geq \frac{\hbar}{2}
$$

### Two-State Quantum Systems

Consider a quantum system with two orthonormal basis states denoted by $\ket{1}$, $\ket{2}$.

These can be represented as

$$
\ket{1} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \ket{2} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}
$$

They satisfy

$$
\braket{i | j} = \delta_{ij}
$$

where $\delta_{ij}$ is the Kronecker delta and $i, j \in \{1, 2\}$.

An arbitrary normalized state can be written as

$$
\ket{\psi} = \alpha \ket{1} + \beta \ket{2}
$$

where $|\alpha|^2 + |\beta|^2 = 1$.

Consider a Hamiltonian $\hat{H}$. The matrix elements of an operator in this basis are

$$
H_{ij} = \braket{i | \hat{H} | j}
$$

The energy eigenstates and eigenfunctions of the Hamiltonian are given by

$$
\hat{H} \ket{S_n} = E_s \ket{S_n}
$$

If given the initial state at $t=0$ such that

$$
\ket{S(0)}  = \sum_n \ket{S_n}
$$

time evolution gives the state at any time $t$,

$$
\ket{S(t)}  = \sum_n e^{-iE_nt/\hbar} \ket{S_n}
$$

assuming $S_n$s were normalized.

### Spectral Decomposition

Consider an operator $\hat{Q}$. The eigenvalue equation of $\hat{Q}$ will be

$$
\hat{Q}\ket{e_n} = q_n \ket{e_n}
$$

where $\{e_n\}$ denote the eigenvectors of $\hat{Q}$, that form an orthonormal eigenbasis, that is, $\braket{e_n | e_m} = \delta_{mn}$.

From the completeness relation, we have

$$
\sum_n \ket{e_n} \bra{e_n} = I
$$

Therefore,

$$
\hat{Q} = \sum_n \hat{Q}\ket{e_n} \bra{e_n}
$$

From the eigenvalue equation, we get

$$
\hat{Q} = \sum_n q_n \ket{e_n} \bra{e_n}
$$

which is known as the spectral decomposition of the operator $\hat{Q}$.

We can also write

$$
\hat{Q} = \sum_n q_n \hat{P}_n
$$

where $\hat{P}_n = \ket{e_n} \bra{e_n}$>

We can also find that any function of a Hermitian operator could be written in temrs of a complete orthonormal eigenbasis $\{\ket{e_n}\}$ of $\hat{Q}$

$$
f(\hat{Q}) = \sum_n f(q_n) \ket{e_n} \bra{e_n}
$$

This is simple to prove for a function that could be expressed as Taylor's series but becomes harder for general functions though it is valid for any function of the operator.

This result also generalizes to normal operators.
