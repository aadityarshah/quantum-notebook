# Angular Momentum in Quantum Mechanics

## Orbital Angular Momentum

In classical mechanics, the angular momentum of a particle about the origin is defined as

$$
\vec{L} = \vec{r} \times \vec{p}
$$

In quantum mechanics, the corresponding orbital angular momentum operator is

$$
\hat{\vec{L}} = \hat{\vec{r}} \times \hat{\vec{p}}
$$

In the position represetnation, we get

$$
\hat{\vec{L}} = -i\hbar(\vec{r} \times \nabla)
$$

Therefore, the Cartesian components are

$$
\begin{aligned} \hat{L}_x &= -i\hbar \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right), \\ \hat{L}_y &= -i\hbar \left(z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right), \\ \hat{L}_z &= -i\hbar \left(x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right) \end{aligned}
$$

### Fundamental Commutation Relations

The Cartesian components of orbital angular momentum are

$$
\begin{aligned} \hat{L}_x &= \hat{y} \hat{p}_z - \hat{z} \hat{p}_y, \\ \hat{L}_y &= \hat{z} \hat{p}_x - \hat{x} \hat{p}_z, \\ \hat{L}_z &= \hat{x} \hat{p}_y - \hat{y} \hat{p}_x \end{aligned}
$$

We know the canonical commutation relations

$$
[\hat{x}_i, \hat{p}_j] = i\hbar \delta_{ij}
$$

and

$$
[\hat{x}_i, \hat{x}_j] = [\hat{p}_i, \hat{p}_j] = 0
$$

These are used to evaluate the commutators between the components off angular momentum.

On solving, we obtain the fundamental angular momentum commutation relations

$$
\begin{aligned} [\hat{L}_x, \hat{L}_y] &= i\hbar \hat{L}_z, \\ [\hat{L}_y, \hat{L}_z] &= i\hbar \hat{L}_x, \\ [\hat{L}_z, \hat{L}_x] &= i\hbar \hat{L}_y \end{aligned}
$$

These can be expressed as

$$
\boxed{[\hat{L}_i, \hat{L}_j] = i\hbar \sum_k {\varepsilon_{ijk} \hat{L}_k}}
$$

where $\varepsilon_{ijk}$ is the Levi-Civita symbol.

### Angular Momentum Squared Operator

Define

$$
\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2
$$

Using the commutator identity for three operators and cyclic symmetry, we obtain

$$
[\hat{L}^2, \hat{L}_x] = [\hat{L}^2, \hat{L}_y] = [\hat{L}^2, \hat{L}_z] = 0
$$

Thus, the total angular momentum squared and any one component can be simultaneously diagonalized.

Conventionally, we choose $\hat{L}^2$ and $\hat{L}_z$, and seek their common eigenstates.

### Angular Momentum Ladder Operators

Since

$$
[\hat{L}^2, \hat{L}_z] = 0,
$$

these operators have a common set of eigenstates.

Let $\ket{\lambda, m}$ denote one such state, satisfying

$$
\begin{aligned} \hat{L}^2 \ket{\lambda, m} &= \hbar^2 l \ket{\lambda, m}, \\ \hat{L}_z \ket{\lambda, m} &= \hbar m \ket{\lambda, m} \end{aligned}
$$

where $\lambda, m$ are dimensionless eigenvalues.

Now, define the raising and lowering operators as

$$
\hat{L}_{\pm} = \hat{L}_x \pm i \hat{L}_y
$$

#### Commutation with $\hat{L}_z$

Consider $[\hat{L}_z, \hat{L}_{\pm}]$.

On solving, we obtain

$$
[\hat{L}_z, \hat{L}_{\pm}] = \pm \hbar \hat{L}_{\pm}
$$

From the definition of a commutator, we have

$$
\hat{L}_z \hat{L}_{\pm} = \hat{L}_{\pm} \hat{L}_z \pm \hbar \hat{L}_{\pm}
$$

Acting on $\ket{\lambda, m}$, we get

$$
\hat{L}_z (\hat{L}_{\pm} \ket{\lambda, m}) = \hbar(m \pm 1)(\hat{L}_{\pm} \ket{\lambda, m})
$$

Thus, $\hat{L}_+$ raises the eigenvalue of $\hat{L}_z$ by $\hbar$ whereas $\hat{L}_-$ lowers it by $\hbar$.

#### Commutation with $\hat{L}^2$

We know

$$
[\hat{L}^2, \hat{L}_x] = [\hat{L}^2, \hat{L}_y] = 0,
$$

thus we get

$$
[\hat{L}^2, \hat{L}_{\pm}] = 0
$$

Therefore,

$$
\hat{L}^2 (\hat{L}_{\pm} \ket{\lambda, m}) = \hbar^2 l (\hat{L}_{\pm} \ket{\lambda, m})
$$

Therefore, ladder operators change the eigenvalue of $\hat{L}_z$ without changing that of $\hat{L}^2$.

We can consequently write

$$
\hat{L}_{\pm} \ket{\lambda, m} = C_{\pm}(\lambda, m) \ket{\lambda, m \pm 1}
$$

where $C_{\pm}(\lambda, m)$ are proportionality constants yet to be determined.

Thus, applications of the ladder operators change $m$ by integer steps while preserving $\lambda$.

### Products of Ladder Operators

Using the definitions of ladder operators, we obtain

$$
\hat{L}_- \hat{L}_+ = \hat{L}_x^2 + \hat{L}_y^2 - \hbar \hat{L}_z
$$

Since $\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$, we get

$$
\hat{L}_- \hat{L}_+ = \hat{L}^2 - \hat{L}_z^2 - \hbar \hat{L}_z
$$

Similarly,

$$
\hat{L}_+ \hat{L}_- = \hat{L}^2 - \hat{L}_z^2 + \hbar \hat{L}_z
$$

## Existence of Upper and Lower Bounds

We defined the common eigenstates $\ket{\lambda, m}$ such that

$$
\begin{aligned} \hat{L}^2 \ket{\lambda, m} &= \hbar^2 \lambda \ket{\lambda, m} \\ \hat{L}_z \ket{l, m} &= \hbar m \ket{\lambda, m} \end{aligned}
$$

Now, since $\hat{L}^2 = \hat{L}_x^2 + \hat{L}_y^2 + \hat{L}_z^2$ and $\hat{L}_x, \hat{L}_y$ are Hermitian,

$$
\begin{aligned} \hbar^2 \lambda &= \braket{\lambda, m | \hat{L}^2 | \lambda, m} \\ &= {\lVert \hat{L}_x \ket{\lambda, m} \rVert}^2 + {\lVert \hat{L}_y \ket{\lambda, m} \rVert}^2 + \hbar^2 m^2 \end{aligned}
$$

The squared norms are nonnegative and thus,

$$
\lambda \geq m^2
$$

For a fixed $\lambda$, the possible values of $m$ are bounded. Hence, repeatedly appyling the ladder operators must eventually produce a zero vector.

Let the highest and lowest allowed values be $m_{max}$ and $m_{min}$ respectively,

Then,

$$
\hat{L}_+ \ket{l, m_{max}} = 0, \quad \hat{L}_- \ket{\lambda, m_{min}} = 0
$$

### Determining the Eigenvalue of $\hat{L}^2$

We know

$$
\hat{L}_- \hat{L}_+ = \hat{L}^2 - \hat{L}_z^2 - \hbar \hat{L}_z
$$

Applying this to the highest state,

$$
\hat{L}_- \hat{L}_+ \ket{\lambda, m_{max}} = 0
$$

Therefore,

$$
\hbar^2 [\lambda - m_{max}^2 - m_{max}] \ket{\lambda, m} = 0
$$

Since the state is nonzero,

$$
\lambda = m_{max} (m_{max} + 1)
$$

Similarly, using

$$
\hat{L}_+ \hat{L}_- = \hat{L}^2 - \hat{L}_z^2 + \hbar \hat{L}_z
$$

on the lowest state, we get

$$
\lambda = m_{min} (m_{min} - 1)
$$

Equating both, we get

$$
m_{min} = -m_{max}
$$

since $m_{max} \geq m_{min}$.

Define $l = m_{max}$. Consequently,

$$
\lambda = l(l+1)
$$

The eigenvalue equation becomes

$$
\hat{L}^2 \ket{l, m} = \hbar^2 l (l+1) \ket{l, m}
$$

### Allowed values of $l$ and $m$

Since the ladder operators change $m$ in steps of one, the total number of stpes between the highest and lowest states must be an integer, that is,

$$
l - (-l) = 2l \in \mathcal{Z_{\geq 0}}
$$

since $m = l, l-1, \dots, -l+1, -l$.

Therefore, angular momentum algebra permits integer or half-integer $l$.

For orbital angular momentum, the wavefunctions established earlier through the angular Schrödinger equation, restricts to integer values of $l$.

For each $l$, there are $2l + 1$ possible values of $m$, which reproduces the quantum numbers obtained from spherical harmonics through operator algebra.

### Determining the Ladder Operator Coefficients

Since $\lambda$ is uniquely determined by $l$, we label the common eigenstates by $\ket{l, m}$. Hence,

$$
\hat{L}_{\pm} \ket{l, m} = C_{\pm}(l, m) \ket{l, m \pm 1}
$$

Since $\hat{L}_+^{\dagger} = \hat{L}_-$, we have

$$
{\lVert \hat{L}_+ \ket{l, m} \rVert}^2 = \braket{l, m | \hat{L}_- \hat{L}_+ | l, m} = \hbar^2[l(l+1) - m(m+1)]
$$

Assuming the states $\ket{l, m}$ are normalized,

$$
{\lVert \hat{L}_+ \ket{l, m} \rVert}^2  = |C_+ (l, m)|^2
$$

Choosing the coefficients to be real and nonnegative, we get

$$
\begin{aligned} C_+(l, m) &= \hbar \sqrt{(l - m)(l + m + 1)}, \\ C_- (l, m) &= \hbar \sqrt{(l+m)(l - m + 1)} \end{aligned}
$$

Thus, the ladder operator actions are

$$
\boxed{ \begin{aligned}\hat{L}_+ \ket{l, m} &= \hbar \sqrt{(l - m)(l + m + 1)} \ket{l, m+1}, \\ \hat{L}_- \ket{l, m} &= \hbar \sqrt{(l+m)(l - m + 1)} \ket{l, m-1} \end{aligned}}
$$

### Angular Momentum Operators in Spherical Coordinates

We know

$$
\hat{L}_z = -i\hbar \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x}\right)
$$

Using the spherical-coordinate transformations,

$$
x = r \sin \theta \cos \phi, \quad y = r \sin \theta \sin \phi
$$

we obtain by the chain rule

$$
\frac{\partial}{\partial \phi} = -y \frac{\partial}{\partial x} + x \frac{\partial}{\partial y}
$$

Therefore,

$$
\hat{L}_z = -i\hbar \frac{\partial}{\partial \phi}
$$

Thus, the angular momentum operator is given by

$$
\hat{L}^2 = -\hbar^2 \left[\frac{1}{\sin \theta} \frac{\partial}{\partial \theta} + \frac{1}{\sin^2 \theta}\frac{\partial^2}{\partial \phi^2}\right]
$$

Thus,

$$
\hat{L}^2 = -\hbar^2 \nabla_{\Omega}
$$

where $\nabla_{\Omega}$ represents the angular Laplacian.

Based upon what waas established in [Quantum Mechanics in Three Dimensions - Spherical Harmonics](./06-quantum-mechanics-in-3D.md#spherical-harmonics), we have

$$
\nabla_{\Omega} Y^m_l = -l(l+1) Y^m_l
$$

and

$$
\frac{\partial Y^m_l}{\partial \phi} = im Y^m_l
$$

Thus, we have

$$
\boxed{\begin{aligned} \hat{L}^2 Y^m_l &= \hbar^2 l (l+1) Y^m_l, \\ \hat{L}_z Y^m_l &= \hbar m Y^m_l \end{aligned}}
$$

This establishes the connection between the abstract eigenstates $\ket{l, m}$ and spherical harmonics, such that

$$
\braket{\theta, \phi |l ,m } = Y^m_l (\theta, \phi)
$$

## Spin Angular Momentum

Quantum particles possess an intrinsic form of angular momentum aside from orbital angular momentum, known as _spin angular momentum_. It should not be interpretated as the literal rotation of a particle about its axis.

Spin follows the same angular momentum algebra developed earlier.

Let $\hat{\vec{S}}$ denote the spin angular momentum operator with components $\hat{S}_x, \hat{S}_y, \hat{S}_z$.

We define

$$
\hat{S}^2 = \hat{S}_x^2 + \hat{S}_y^2 + \hat{S}_z^2
$$

The spin operators satisfy

$$
[\hat{S}_i, \hat{S}_j] = i\hbar \varepsilon_{ijk} \hat{S}_k
$$

and

$$
[\hat{S}^2, \hat{S}_i] = 0
$$

Therefore, $\hat{S}^2$ and $\hat{S}_z$ possess simultaneous eigenstates $\ket{s, m_s}$ satisfying

$$
\boxed{\begin{aligned} \hat{S}^2 \ket{s, m_s} &= \hbar^2 s(s+1) \ket{s, m_s}, \\ \hat{S}_z \ket{s, m_s} &= \hbar m_s \ket{s, m_s} \end{aligned}}
$$

Here,

$$
s = 0, \frac{1}{2}, 1, \frac{3}{2}, \dots
$$

and

$$
m_s = -s, -s + 1, \dots, s
$$

Unlike orbital angular momentum, spin can have half-integer quantum numbers.

### Spin-$\frac{1}{2}$ particles

For an electron, the spin quantum number is

$$
s = \frac{1}{2}
$$

Therefore, the possible values of $m_s$ are

$$
m_s = \pm \frac{1}{2}
$$

Thus, the electron possesses two independent spin states $\ket{1/2, 1/2}$ and $\ket{1/2, -1/2}$. These are also denoted by

$$
\ket{+} \equiv \ket{\frac{1}{2}, \frac{1}{2}}, \quad \ket{-} \equiv \ket{\frac{1}{2}, -\frac{1}{2}}
$$

Thus, spin state space is two-dimensional.

Choosing these states as an orthonormal basis, we represent them by

$$
\boxed{\ket{+} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad \ket{-} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}}
$$

Any normalized spin-$\frac{1}{2}$ state can therefore be expressed as

$$
\ket{\chi} = a \ket{+} + b \ket{-} = \begin{pmatrix}a \\ b \end{pmatrix}, \quad |a|^2 + |b|^2 = 1
$$

### Matrix Representation of $\hat{S}_z$

From the eigenvalue equation,

$$
\begin{aligned} \hat{S}_z \ket{+} &= \frac{\hbar}{2} \ket{+}, \\ \hat{S}_z \ket{-} &= -\frac{\hbar}{2} \ket{-} \end{aligned}
$$

Thus,

$$
\hat{S}_z = \frac{\hbar}{2} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

Similarly, since $s = 1/2$, we get

$$
\hat{S}^2 \ket{\pm} = \frac{3}{4} \hbar^2 \ket{\pm}
$$

and matrix representation is

$$
\hat{S}^2 = \frac{3\hbar^2}{4} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

The elements of $\hat{S}^2$ are denoted by $\hat{S}^2_{++}, \hat{S}^2_{+-}, \hat{S}^2_{-+}, \hat{S}^2_{--}$.

For example,

$$
\hat{S}^2_{++} = \braket{+ | \hat{S}^2 | +}
$$

### Matrix Representations of Spin Operators

The spin ladder operators are given by

$$
\hat{S}_{\pm} = \hat{S}_x \pm i\hat{S}_y
$$

Their action on angular momentum eigenstates is

$$
\hat{S}_{\pm} \ket{s, m_s} = \hbar \sqrt{s(s+1) - m_s(m_s \pm 1)} \ket{s, m_s \pm 1}
$$

For $m_s = \frac{1}{2}$,

$$
\hat{S}_+ \ket{+} = 0
$$

since no state with $m_s = \frac{3}{2}$ exists in this spin-$\frac{1}{2}$ representation.

For $m_s = -\frac{1}{2}$,

$$
\hat{S}_+ \ket{-} = \hbar \sqrt{\frac{1}{2} \left(\frac{1}{2} + 1 \right) - \left(-\frac{1}{2}\right)\left(\frac{1}{2}\right)} \ket{+} = \hbar \ket{+}
$$

Thus, we obtain

$$
\hat{S}_+ = \hbar \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}
$$

Similarly, for the lowering operator $\hat{S}_-$,

$$
\hat{S}_- \ket{+} = \hbar \ket{-}, \quad \hat{S}_- \ket{-} = 0
$$

Therefore,

$$
\hat{S}_- = \hbar \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}
$$

From definitions of the ladder operators, we have

$$
\hat{S}_x = \frac{\hat{S}_+ + \hat{S}_-}{2}, \quad \hat{S}_x = \frac{\hat{S}_+ - \hat{S}_-}{2i}
$$

Thus, we obtain the matrix representations

$$
\hat{S}_x = \frac{\hbar}{2} \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}
$$

and

$$
\hat{S}_y = \frac{\hbar}{2} \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix}
$$

### Pauli Spin Matrices

We can now express all three spin components as

$$
\hat{S}_i = \frac{\hbar}{2} \sigma_i, \quad i = x, y, z
$$

The matrices $\sigma_x, \sigma_y, \sigma_z$ are called the _Pauli spin matrices_:

$$
\boxed{\sigma_x = \begin{pmatrix}0 & 1 \\ 1 & 0 \end{pmatrix}, \\ \sigma_y = \begin{pmatrix}0 & -i \\ i & 0 \end{pmatrix}, \\ \sigma_z = \begin{pmatrix}1 & 0 \\ 0 & -1 \end{pmatrix}}
$$

The spin angular momentum vector can be written as

$$
\hat{\vec{S}} = \frac{\hbar}{2} \hat{\vec{\sigma}}
$$
