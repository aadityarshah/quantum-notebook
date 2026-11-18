# Quantum Information

## Quantum Entanglement

### Classical Correlation vs Quantum Entanglement

Classical systems can exhibit correlations, that is, knowledge of one variable can provide information about another. quantum systems can exhibit correlations of a fundamentally different kind. So, it is important to distinguish a correlation from the quantum phenomenon of entanglement.

Consider the state

$$
\ket{\psi} = \frac{1}{\sqrt{2}} (\ket{00} + \ket{11})
$$

The measurement outcomes of the two qubits are perfectly correlated but the state is a quantum superposition of the joint states $\ket{00}$ and $\ket{11}$ rather than a classical mixture of the possibilities. This correlation, explained informally is what is called **quantum entanglement**.

Stating informally, the thing special about quantum entanglement is that the two systems do not have independent definite states that can simply be considered as existing beforehand. Yet on knowing one you know other due to the existing correlation, which earlier could not be understood merely as ignorance about pre-existing definite states. This makes it fundamentally different from a classical correlation.

### EPR Paradox

In an informal way, the basic question EPR raises is

_"If locality is maintained, and we can predict a distant particle's measurement outcome with certainty without distrurbing it, then perhaps quantum mechanics is incomplete because it does not describe some underlying pre-existing properties."_

Consider two spin-$\frac{1}{2}$ single states $A$ and $B$ which are in an entangled state represented by

$$
\ket{\psi} = \frac{1}{\sqrt{2}} [\ket{\uparrow \downarrow} - \ket{\downarrow \uparrow}]
$$

On changing the orientation along any arbitrary direction $\vec{n}$ to measure the spin, we still measure the spin of the other qubit with certainty as in that case one could express the state as

$$
\ket{\psi} = \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow}_n - \ket{\downarrow\uparrow}_n)
$$

So EPR argues that if measuring one lets us predict the value of other with certainty without interacting with the other, then the other state's corresponding physical quantity should hcorrespond to an element of reality that exists independently of measurement, later interpreted as **hidden-variables**.

Go through [Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?](https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777) to understand the EPR paradox in its original form and in more detail.

### Bell's Inequality

The question that arises from the EPR paradox is if a hidden-variable explanation can actually reproduce the correlations predicted by quantum mechanics.

Bell derived an inequality and argued that if hidden variable theory holds, we must have an expression equivalent to

$$
p_{\vec{a}\vec{b}} + p_{\vec{b}\vec{c}} - p_{\vec{a}\vec{c}} \geq 0
$$

where $\vec{a}, \vec{b}, \vec{c}$ are the directions chose to measure the spin, and $p_{\vec{x}\vec{y}}$ denotes the probability that same outcomes are measured along $\vec{x}, \vec{y}$, $\vec{x}, \vec{y} \in \{\vec{a}, \vec{b}, \vec{c}\}$.

On substituting the quantum-mechanical probabilities, we obtain the expression

$$
\frac{1}{2} \left[\sin^2 \left(\frac{\theta_{ab}}{2}\right) + \sin^2 \left(\frac{\theta_{bc}}{2}\right)- \sin^2 \left(\frac{\theta_{ac}}{2}\right)\right] \geq 0
$$

where $\theta_{xy}$ represents the angle between two vectors $\vec{x}$ and $\vec{y}$.

But this inequality isn't always true. One simple counterexample is $\theta_{ab} = 0, \theta_{bc} = \pi/3, \theta_{ac} = 2\pi/3$

This was verified experimentally and the local hidden-variable theories were ruled out.

Refer [On the Einstein Podolsky Rosen Paradox](https://journals.aps.org/ppf/abstract/10.1103/PhysicsPhysiqueFizika.1.195) to understand Bell's arguments for the EPR paradox.

### Mathematical Characterization of Entanglement

Consider a composite system of two qubits $A$ and $B$ in a normalized pure state $\ket{\psi_{AB}}$.

If the state can be expressed as

$$
\ket{\psi_{AB}} = \ket{\psi_A} \ket{\psi_B}
$$

then the state is called a _separable pure state_ or a _product state_. Otherwise it is called an _entangled state_.

For a product state, one can show that the expectation value of a product of local observables factorizes as

$$
\langle \hat{A} \oplus \hat{B} \rangle = \langle \hat{A} \rangle \langle \hat{B} \rangle
$$

Now, consider an arbitrary composite state of two qubits

$$
\ket{\psi_{AB}} = p\ket{00} + q\ket{01} + r\ket{10} + s\ket{11}
$$

where $p, q, r, s \in \mathbb{C}$, satisfying normalization condition

$$
|p|^2 + |q|^2 + |r|^2 + |s|^2 = 1
$$

Suppose $\ket{\psi_{AB}}$ is factorisable. Then, we would have

$$
\ket{\psi_{AB}} = \ket{\psi_A} \ket{\psi_B}
$$

where

$$
\begin{aligned}\ket{\psi_A} &= \alpha_A \ket{0} + \beta_A \ket{1} \\ \ket{\psi_B} &= \alpha_B \ket{0} + \beta_B \ket{1} \end{aligned}
$$

On expanding, we get

$$
\ket{\psi_{AB}} = \alpha_A \alpha_B \ket{00} + \alpha_A \beta_B \ket{01} + \beta_A \alpha_B\ket{10} + \beta_A \beta_B \ket{11}
$$

Hence, for a separable state, we have

$$
\boxed{ps - qr = 0}
$$

Conversely, if $ps - qr = 0$, the coefficient matrix

$$
\hat{C} = \begin{pmatrix}p & q \\ r & s\end{pmatrix}
$$

has determinant zero and therefore rank one, since the state is normalized and $C \neq 0$.

Here, $\hat{C}$ comes from the decomposition such that

$$
\ket{\psi_{AB}} = \begin{pmatrix} \ket{0}_A & \ket{1}_A \end{pmatrix} \hat{C} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix}
$$

#### Quantifying Entanglement

To evaluate which state is more entangled, we quantify entaglement. This measure of entanglement or _degree of entanglement_ is given by

$$
\varepsilon = |ps - qr|
$$

So, if two states with degree of entaglements $\varepsilon_1, \varepsilon_2$ are compared, then we say first is more entangled than the second if $\varepsilon_1 > \varepsilon_2$.

Now, we look into the upper bound of $\varepsilon$.

We have

$$
\ket{\psi_{AB}} = \begin{pmatrix} \ket{0}_A & \ket{1}_A \end{pmatrix} \hat{C} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix}
$$

where

$$
\hat{C} = \begin{pmatrix}p & q \\ r & s\end{pmatrix}
$$

$$
\hat{C}\hat{C}^{\dagger} = \begin{pmatrix} |p|^2 + |q|^2 & pr^{\ast} + qs^{\ast} \\ rp^{\ast} + sq^{\ast} & |r|^2 + |s|^2\end{pmatrix}
$$

Due to normalization, we have $Tr(\hat{C}\hat{C}^{\dagger}) = 1$.

$\det({\hat{C}\hat{C}^{\dagger}}) = \det({\hat{C}}) \det(\hat{C}^{\dagger}) = |\varepsilon^2|$

Now, it shall be noted that a matrix of form $\hat{A} = \hat{B}^{\dagger}\hat{B}$ is a _positive matrix_.

$\hat{A}$ is called a positive matrix if $\braket{\psi | \hat{A} | \psi} \geq 0 \, \forall \ket{\psi}$. If $\hat{A}$ is a positive matrix, then its eigenvalues are real and positive. This could be shown by taking the $\ket{\psi} = \ket{\lambda}$ where $\ket{\lambda}$ is an eigenvector of $\hat{A}$.

On the basis of this, one can establish that $\hat{C}\hat{C}^{\dagger}$ is a positive matrix and thus its eigenvalues are real and positive.

The eigenvalues $\lambda_{1, 2}$ are given by

$$
\begin{aligned}\lambda_{1, 2} &= \frac{1}{2} [Tr(\hat{C}\hat{C}^{\dagger}) \pm \sqrt{Tr(\hat{C} \hat{C}^{\dagger})^2 - 4 \det({\hat{C} \hat{C}^{\dagger}})}]
&= \frac{1}{2} [1 \pm \sqrt{1 - 4 \varepsilon^2}] \end{aligned}
$$

We must have $1 - 4 \varepsilon^2 \geq 0$ as we established that $\hat{C}\hat{C}^{\dagger}$ is a positive matrix and therefore,

$$
\boxed{\epsilon \leq \frac{1}{2}}
$$

Also note that we therefore have

$$
\lambda_1 + \lambda_2 = 1, \quad \lambda_1, \lambda_2 \geq 0
$$

Since we have two non-negative numbers with sum as q, they can be parameterized as

$$
\lambda_1 = \cos^2 \alpha, \quad \lambda_2 = \sin^2 \alpha
$$

By convention, $\lambda_1 \geq \lambda_2$, so we choose

$$
0 \leq \alpha \leq \frac{\pi}{4}
$$

and thus,

$$
\begin{aligned}\lambda_1 \equiv \cos^2 \alpha &= \frac{1}{2} \left(1 + \sqrt{1 - 4E_1^2}\right) \\ \lambda_2 \equiv \sin^2 \alpha &= \frac{1}{2} \left(1 - \sqrt{1 - 4E_1^2}\right)\end{aligned}
$$

Therefore, we obtain

$$
\boxed{\varepsilon = \frac{1}{2}\sin 2\alpha}
$$

## Schmidt Decomposition

### Diagonalization Methods

#### Unitary Similarity Transformations

Two square matrices $\hat{A}$ and $\hat{B}$ are said to be _similar_ if there exists an invertible matrix $\hat{S}$ such that

$$
\hat{B} = \hat{S}^{-1}\hat{A}\hat{S}
$$

If $\hat{S}$ is unitary, then

$$
\hat{S}^{-1} = \hat{S}^{\dagger}
$$

and hence,

$$
\hat{B} = \hat{S}^{\dagger}\hat{A}\hat{S}
$$

This is called a _unitary similarity transformation_.

We want a unitary matrix $\hat{S}$ such that

$$
\hat{S}^{\dagger} \hat{A} \hat{S} = \hat{D}
$$

where $\hat{D}$ is diagonal.

Such a unitary matrix exists if and only if $\hat{A}$ is normal, that is,

$$
\hat{A}^{\dagger}\hat{A} = \hat{A}\hat{A}^{\dagger}
$$

Therefore, not every matrix can be diagonalized by a unitary similarity transformation.

#### Singular Value Decomposition

For any matrix $\hat{A}$, there exist unitary matrices $\hat{U}$ and $\hat{V}$ such that

$$
\hat{U}^{\dagger} \hat{A}\hat{V} = \hat{D}
$$

where, for the two dimensions,

$$
\hat{D} = \begin{pmatrix} \mu_1 & 0 \\ 0 & \mu_2 \end{pmatrix}, \quad \mu_1, \mu_2 \geq 0
$$

The quantities $\mu_1, \mu_2$ are called the singular values of $\hat{A}$.

This representation of $\hat{A}$ is called its _singular value decomposition_(SVD).

#### SVD as a Generalization

SVD allows two different unitary matrices and exists for every complex matrices, including those that are not normal.

We can consider the following cases:

1. If $\hat{A}$ is normal, it can be diagonalized by a unitary similarity transformation.
2. If $\hat{A}$ is not normal, but possesses a complete set of linearly independent eigenvectors, it can be diagonalized using a similarity transformation $\hat{S}^{-1}\hat{A}\hat{S} = \text{diag}$ , although not a unitary similarity transformation.
3. If $\hat{A}$ is not normal and does not have a complete set of linearly independent eigenvectors, $\hat{A}$ can be reduced to [Jordan canonical form](https://en.wikipedia.org/wiki/Jordan_normal_form) by similarity transformation, that is,

$$
\hat{S}^{-1} \hat{A} \hat{S} = \hat{J}
$$

However, SVD is still possible in all three cases.

### Schmidt Form of a Two-Qubit State

We have

$$
\ket{\psi_{AB}} = \begin{pmatrix} \ket{0}_A & \ket{1}_A \end{pmatrix} \hat{C} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix}
$$

where

$$
\hat{C} = \begin{pmatrix}p & q \\ r & s\end{pmatrix}
$$

From SVD, we obtain

$$
\hat{U}^{\dagger}\hat{C}\hat{V} = \hat{D}
$$

equivalently,

$$
\hat{C} = \hat{U}\hat{D} \hat{V}^{\dagger}
$$

where

$$
\hat{D} = \begin{pmatrix} \mu_1 & 0 \\ 0 & \mu_2 \end{pmatrix}, \quad \mu_1, \mu_2 \geq 0
$$

Substituting it gives

$$
\ket{\psi_{AB}} = \begin{pmatrix} \ket{0}_A & \ket{1}_A \end{pmatrix} \hat{U}\hat{D}\hat{V}^{\dagger} \begin{pmatrix}\ket{0}_B \\ \ket{1}_B \end{pmatrix}
$$

Now, we define the transformed bases such that

$$
\hat{U}^{\dagger} \begin{pmatrix} \ket{0}_A \\ \ket{1}_A \end{pmatrix} = \begin{pmatrix} \ket{n_A, 0}_A \\ \ket{n_A, 1}_A \end{pmatrix}
$$

and

$$
\hat{V}^{\dagger} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix} = \begin{pmatrix} \ket{n_B, 0}_B \\ \ket{n_B, 1}_B \end{pmatrix}
$$

Therefore,

$$
\ket{\psi_{AB}} = \mu_1 \ket{n_A, 0}_A \ket{n_B, 0}_B + \mu_2 \ket{n_A, 1}_A \ket{n_B, 1}_B
$$

We have established earlier in [Quantifying Entaglement](#quantifying-entanglement) that eigenvalues of $\hat{C}\hat{C}^{\dagger}$ are

$$
\lambda_1 = \cos^2 \alpha, \quad \lambda_2 \sin^2 \alpha
$$

Later we will show

$$
\mu_1^2 = \lambda_1, \quad \mu_2^2 = \lambda_2
$$

Hence,

$$
\ket{\psi_{AB}} = \cos \alpha \ket{n_A, 0}_A \ket{n_B, 0}_B + \sin \alpha \ket{n_A, 1}_A \ket{n_B, 1}_B
$$

This representation of an arbitrary two-qubit state as a superposition of two orthogonal two-qubit states is called its _Schmidt Decomposition_.

### Construction of the Schmidt Transformation

We seek unitary matrices $\hat{U}, \hat{V}$ such that

$$
\hat{U}^{\dagger}\hat{C}\hat{V} = \hat{D}
$$

Equivalently,

$$
\begin{aligned}\hat{C} &= \hat{U}\hat{D}\hat{V}^{\dagger} \\ \hat{C}^{\dagger} &= \hat{V}\hat{D}^{\dagger}\hat{U}^{\dagger} \end{aligned}
$$

Since $\hat{D}$ is diagonal with real non-negative entries, $\hat{D}^{\dagger} = \hat{D}$.

Therefore,

$$
\hat{V}^{\dagger}\hat{C}^{\dagger}\hat{C}\hat{V} = \hat{D}^2
$$

Similarly,

$$
\hat{U}^{\dagger} \hat{C}\hat{C}^{\dagger} \hat{U} = \hat{D}^2
$$

So, $\hat{U}$ diagonalize $\hat{C}\hat{C}^{\dagger}$ hwhereas $\hat{V}$ diagonalizes $\hat{C}^{\dagger}\hat{C}$ and thus $\mu_1^2, \mu_2^2$ are eigenvalues of $\hat{C}\hat{C}^{\dagger}$. Also, we had found $\lambda_{1,2}$ earlier as eigenvalues.

Hence,

$$
\boxed{\mu_1^2 = \lambda_1, \quad \mu_2^2 = \lambda_2}
$$

This suggests that to construct the SVD, eigenvectors of $\hat{A}^{\dagger}\hat{A}$ and $\hat{A}\hat{A}^{\dagger}$ shall be determined.

#### Constructing $\hat{U}$ and $\hat{V}$

Let the normalized eigenvectors of $\hat{C}\hat{C}^{\dagger}$ be $\ket{\alpha_1}, \ket{\alpha_2}$, such that

$$
\hat{C}\hat{C}^{\dagger}\ket{\alpha_i} = \mu_i^2 \ket{\alpha_i}
$$

Since $\hat{C}\hat{C}^{\dagger}$ is Hermitian, its eigenvectors can be chosen orthonormal and therefore, $\hat{U}$ is unitary.

Put these eigenvectors as the columns of $\hat{U}$.

Similarly, let the normalized eigenvectors of $\hat{C}^{\dagger}\hat{C}$ be $\ket{\beta_1}, \ket{\beta_2}$, such that

$$
\hat{C}^{\dagger}\hat{C} \ket{\beta_i} = \mu_i^2 \ket{\beta_i}
$$

Similarly to $\hat{U}$, on putting orthonormal eigenvectors as columns, we have $\hat{V}$.

#### Phase Correction

From SVD, we want $\hat{U}^{\dagger}\hat{C}\hat{V}$ to have real and positive singular values but eigenvectors are only defined up to arbitrary phase factors. Therefore, SVD might give

$$
\hat{U}^{\dagger}\hat{C}\hat{V} = \begin{pmatrix}|\mu_1|e^{i\phi_1} & 0 \\ 0 & |\mu_2|e^{i\phi_2} \end{pmatrix}
$$

This matrix can factored as

$$
\begin{pmatrix}|\mu_1|e^{i\phi_1} & 0 \\ 0 & |\mu_2|e^{i\phi_2} \end{pmatrix} = \begin{pmatrix}|\mu_1| & 0 \\ 0 & |\mu_2| \end{pmatrix} \begin{pmatrix}e^{i\phi_1} & 0 \\ 0 & e^{i\phi_2} \end{pmatrix}
$$

Define

$$
\hat{\Phi} = \begin{pmatrix}e^{i\phi_1} & 0 \\ 0 & e^{i\phi_2} \end{pmatrix}
$$

Then

$$
\hat{U}^{\dagger}\hat{C}\hat{V} = \hat{D}\hat{\Phi}
$$

Now, define

$$
\hat{V'} = \hat{V}\hat{\Phi}^{-1}
$$

Therefore,

$$
\boxed{\hat{U}^{\dagger}\hat{C}\hat{V}' = \begin{pmatrix}|\mu_1| & 0 \\ 0 & |\mu_2| \end{pmatrix}}
$$

This gives the desired SVD.

#### Construct the Schmidt bases

For the original two-qubit state

$$
\ket{\psi_{AB}} = \begin{pmatrix} \ket{0}_A & \ket{1}_A \end{pmatrix} \hat{C} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix}
$$

From SVD, we have $\hat{C} = \hat{U}^{\dagger} \hat{D} \hat{V'}$.

The Schmidt basis for qubit $A$ is obtained through

$$
\hat{U}^{\dagger} \begin{pmatrix} \ket{0}_A \\ \ket{1}_A \end{pmatrix} = \begin{pmatrix} \ket{n_A, 0}_A \\ \ket{n_A, 1}_A \end{pmatrix}
$$

For qubit $B$, after phase correction,

$$
\hat{V'}^{\dagger} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix} = \begin{pmatrix} \ket{n_B, 0}_B \\ \ket{n_B, 1}_B \end{pmatrix}
$$

After constructing $U, V'$,

$$
\hat{U}^{\dagger} \begin{pmatrix} \ket{0}_A \\ \ket{1}_A \end{pmatrix} = \begin{pmatrix} \ket{n_A, 0}_A \\ \ket{n_A, 1}_A \end{pmatrix}
$$

$$
\hat{V'}^{\dagger} \begin{pmatrix} \ket{0}_B \\ \ket{1}_B \end{pmatrix} = \begin{pmatrix} \ket{n_B, 0}_B \\ \ket{n_B, 1}_B \end{pmatrix}
$$

We obtain

$$
\ket{\psi_{AB}} = \mu_1 \ket{n_A, 0}_A \ket{n_B, 0}_B + \mu_2 \ket{n_A, 1}_A \ket{n_B, 1}_B
$$

We also know

$$
|\mu_1|^2 = \lambda_1 = \cos^2 \alpha, \quad |\mu_2|^2 = \lambda_2 = \sin^2 \alpha
$$

We finally obtain

$$
\ket{\psi_{AB}} = \cos \alpha \ket{n_A, 0}_A \ket{n_B, 0}_B + \sin \alpha \ket{n_A, 1}_A \ket{n_B, 1}_B
$$

## Mixed States and Density Matrix

Consider the two ensembles, $E_x$ with all qubits in $\ket{x, 0} = 1/\sqrt{2}(\ket{0} + \ket{1})$ and $E_m$ with half the qubits in $\ket{0}$, half in $\ket{1}$.

Now measure $\hat{\sigma}_z$..

For $E_x$, we have

$$
P(0) = P(1) = \frac{1}{2}
$$

For $E_m$, half the systems were already prepared in $\ket{0}$ and half in $\ket{1}$, so again

$$
P(0) = P(1) = \frac{1}{2}
$$

Therefore, merely measurement doesn't help us differentiate between a mixture of states and a pure superposition state.

### General Mixed State

Let's work on a general ensemble to understand this.

Suppose an ensemble contains systems in states $\ket{\psi_1}, \ket{\psi_2}, \dots, \ket{\psi_n}$ with probabilities $p_1, p_2, \dots, p_n$ and $\sum_{k=1}^n p_k = 1$.

For an arbitrary observable,

$$
\langle \hat{A} \rangle = \sum_{k=1}^n p_k \braket{\psi_k | \hat{A} | \psi_k}
$$

Now, since for any operator $\hat{P}$, we have

$$
Tr\left(\hat{P} \ket{\psi} \bra{\phi} \right) = \braket{\phi | \hat{P} | \psi}
$$

we can write

$$
\braket{\psi_k | \hat{A} | \psi_k} = Tr\left(\hat{A} \ket{\psi_k} \bra{\psi_k} \right)
$$

so

$$
\langle \hat{A} \rangle = Tr \left[\hat{A} \sum_k p_k \ket{\psi_k} \bra{\psi_k} \right]
$$

Define

$$
\hat{\rho} = \sum_{k=1}^n p_k \ket{\psi_k} \bra{\psi_k}
$$

which is called _density matrix_.

Therefore, we obtain

$$
\boxed{\langle \hat{A} \rangle = Tr(\hat{A}\hat{\rho})}
$$

Now choose an orthonormal basis $\{\ket{a_i}\}$, and expand each state

$$
\ket{\psi_k} = \sum_{i=1}^N c_{ki} \ket{a_i}
$$

Therefore,

$$
\hat{\rho} = \sum_k \sum_{i, j} c_{ki} c^{\ast}_{kj} \ket{a_i}\ket{a_j}
$$

Rearranging, we obtain

$$
\hat{\rho} = \sum_{i,j} \rho_{ij} \ket{a_i} \ket{a_j}
$$

where

$$
\rho_{ij} = \sum_k p_k c_{ki} c^{\ast}_{kj}
$$

essentially giving the matrix elements and henceforth the matrix representation for $\hat{\rho}$.

### Properties of the Density Matrix

#### Hermitian

We have

$$
\hat{\rho} = \sum_k p_k \ket{\psi_k} \bra{\psi_k}
$$

On taking the adjoint, we get

$$
\hat{\rho}^{\dagger} = \sum_k p_k \ket{\psi_k}\bra{\psi_k}
$$

Hence,

$$
\boxed{\hat{\rho}^{\dagger} = \hat{\rho}}
$$

So, every density matrix is Hermitian.

#### Unit Trace

$$
\begin{aligned}Tr(\hat{\rho}) &= \sum_k p_k Tr(\ket{\psi_k}\ket{\psi_k}) \\ &= \sum_k p_k \braket{\psi_k | \psi_k} \\ &= 1 \end{aligned}
$$

Therefore,

$$
\boxed{Tr(\hat{\rho}) = 1}
$$

#### Positive

Take an arbitrary state $\ket{\psi}$>

$$
\begin{aligned}\braket{\psi | \hat{\rho} | \psi} &= \sum_k p_k \braket{\psi | \psi_k} \braket{\psi_k | \psi} \\ &= \sum_k p_k |\braket{\psi | \psi_k}|^2 \end{aligned}
$$

Every term is non-negative, so

$$
\braket{\psi | \hat{\rho} | \psi} \geq 0
$$

for every $\ket{\psi}$.

Thus, density matrix is a positive operator.

#### General $2 \times 2$ density matrix

Consider a density matrix given by

$$
\hat{\rho} = p \ket{0} \bra{0} + q \ket{1}\bra{1} + \alpha \ket{0}\bra{1} + \beta \ket{1}\bra{0}
$$

Now, since it is Hermitian, we must have

$$
p, q \in \mathbb{R}, \quad \beta = \alpha^{\ast}
$$

Now, the trace must be one. Therefore,

$$
q = 1-p
$$

From these conditions, we have

$$
\rho = \begin{pmatrix} p & \alpha \\ \alpha^{\ast} & 1 - p \end{pmatrix}
$$

Also, it is a positive operator. Therefore, $\lambda_{1, 2} \geq 0$.

Now,

$$
\lambda_{1,2} = \frac{1}{2} \left[1 \pm \sqrt{(2p-1)^2 + 4|\alpha|^2} \right]
$$

Now, the smaller eigenvalue must be non-negative, so

$$
1 - \sqrt{(2p-1)^2 + 4|\alpha|^2} \geq 0
$$

From this, we obtain

$$
\boxed{|\alpha|^2 \leq p(1-p)}
$$

So, a general qubit density matrix can be written as

$$
\rho = \begin{pmatrix} p & \alpha \\ \alpha^{\ast} & 1 - p\end{pmatrix}, \quad 0 \leq p \leq 1, \quad |\alpha|^2 \leq p(1-p)
$$

### Spectral Decomposition of the Density Matrix

Since $\hat{\rho}$ is Hermitian, it has a complete orthonormal set of eigenvectors $\{\ket{\lambda_i}\}$ with real eigenvalues

$$
\hat{\rho} \ket{\lambda_i} = \lambda_i \ket{\lambda_i}
$$

Using completeness,

$$
I = \sum_i \ket{\lambda_i} \bra{\lambda_i}
$$

Therefore,

$$
\boxed{\hat{\rho} = \sum_i \lambda_i \ket{\lambda_i}\bra{\lambda_i}}
$$

This is the spectral decomposition of $\hat{\rho}$.

This also gives us

$$
\boxed{f(\hat{\rho}) = \sum_i f(\lambda_i )\ket{\lambda_i}\bra{\lambda_i}}
$$

Since $\hat{\rho}$ is a positive operator and has unit trace,

$$
\boxed{\lambda_i \geq 0, \quad \sum_i \lambda_i = 1}
$$

So, the eigenvalues of a density matrix behave like a probability distribution.

### von Neumann Entropy

Define

$$
S = -Tr(\hat{\rho} \log \hat{\rho})
$$

Using the spectral decomposition,

$$
\hat{\rho} = \sum_i \lambda_i \ket{\lambda_i}\bra{\lambda_i}
$$

we obtain

$$
S = -\sum_i \lambda_i \log \lambda_i
$$

which is analogous to Shannon entropy

$$
H = -\sum_i p_i \log p_i
$$

### Bloch-Vector form of a single-qubit density matrix

Consider

$$
\hat{\rho} = a_0 I + \vec{a} \hat{\vec{\sigma}}
$$

with $\vec{a}$ being real because $\rho$ is Hermitian.

From hermitivity and unit trace conditions, we obtain

$$
a_0 = \frac{1}{2}
$$

Thus, eigenvalues will be

$$
\boxed{\lambda_{1, 2} = \frac{1}{2} \left(1 \pm |\vec{a}| \right)}
$$

and positivity requires

$$
\boxed{|\vec{a}| \leq 1}
$$

This gives the density-matrix version of the Bloch sphere. Therefore, $|\vec{a}| = 1$ would imply a pure qubit state, $|\vec{a}| < 1$ implies a mixed state and $\vec{a} = 0$ implies a maximally mixed state.

### Pure State Criterion

A pure state has density matrix

$$
\hat{\rho} = \ket{\psi} \bra{\psi}
$$

so

$$
\hat{\rho}^2 = \ket{\psi} \braket{\psi | \psi} \bra{\psi} = \hat{\rho}
$$

Hence,

$$
\hat{\rho}^2 = \hat{\rho}
$$

for a pure state.

Equivalently, its eigenvalues must satisfy

$$
\lambda_i^2 = \lambda_i
$$

and thus eigenvalues must be $\{0, 1\}$.

For this, in the Bloch-form eigenvalues, we need $|\vec{a}| = 1$.

The purity test can also simply be done by looking at $Tr(\rho^2)$, that is, for a pure state

$$
\boxed{Tr(\rho^2) = 1}
$$

In case of any density matrix,

$$
\rho^2 = \sum_i \lambda_i^2 \ket{\lambda_i}\bra{\lambda_i}
$$

So,

$$
Tr(\rho^2) = \sum_i \lambda_i^2
$$

Now, we know $0 \leq \lambda_i \leq 1$, therefore

$$
Tr(\rho^2) \leq 1
$$

Equality holds only if every $\lambda_i$ satisfies $\lambda_i^2 = \lambda_i$ which indicates a pure state. In any other case, that is for a mixed state, we have

$$
\boxed{Tr(\rho^2) \lt 1}
$$
