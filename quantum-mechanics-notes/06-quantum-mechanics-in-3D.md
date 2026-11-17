# Quantum Mechanics in Three Dimensions

## Schrödinger equation in Three Dimensions

### Wavefunctions in Three Dimensions

For a particle moving in three dimensions, its position-space wavefunction is

$$
\Psi(\vec{r}, t) = \braket{\vec{r} | \psi(t)}, \quad \vec{r} = (x, y, z)
$$

The probability of finding the particle within a volume $V$ is

$$
P(V) = \int_V |\psi(\vec{r}, t)|^2 d^3 r
$$

For a normalized state,

$$
\int_{\mathcal{R}} |\psi(\vec{r}, t)|^2 d^3 r = 1
$$

### Momentum Operator in Three Dimensions

In the position representation, momentum operator is given by

$$
\hat{\vec{p}} = -i\hbar \hat{\vec{\nabla}}
$$

where

$$
\vec{\nabla} = \vec{e}_x \frac{\partial}{\partial x} + \vec{e}_y \frac{\partial}{\partial y} + \vec{e}_z \frac{\partial}{\partial z}
$$

and $\vec{e}_x, \vec{e}_y, \vec{e}_z$ represents unit vectors along $x, y, z$ axes.

Therefore,

$$
\hat{\vec{p}}^2 = -\hbar^2 \vec{\nabla}^2
$$

where $\vec{\nabla}^2$ is the Laplacian.

### Time-Dependent Schrödinger equation

The time-dependent Schrödinger equation is given by

$$
i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi
$$

For a particle of mass $m$ in a potential $V(\vec{r}, t)$, the Hamiltonian is

$$
\hat{H} = \frac{\hat{\vec{p}}^2}{2m} + V(\vec{r}, t)
$$

Therefore, the time-dependent Schrödinger equation in three dimensions is given by

$$
i \hbar \frac{\partial \Psi}{\partial t} = -\frac{{\hbar}^2}{2m} \nabla^2 \Psi + V(\vec{r}, t) \Psi
$$

### TIme-Independent Schrödinger equation

For a time-independent potential $V(\vec{r})$,

$$
i \hbar \frac{\partial \Psi(\vec{r}, t)}{\partial t} = -\frac{{\hbar}^2}{2m} \nabla^2 \Psi(\vec{r}, t) + V(\vec{r}) \Psi(\vec{r}, t)
$$

Consider a separable solution

$$
\Psi(\vec{r}, t) = \psi(\vec{r}) \phi(t)
$$

On substituting and simplifying, we obtain

$$
i \hbar \frac{1}{\phi} \frac{d\phi}{dt} = - \frac{{\hbar}^2}{2m} \frac{\nabla^2 \psi}{\psi} + V(\vec{r})
$$

Left side of the equation depends only on $t$ whereas right side depends only on $\vec{r}$, therefore both must equal a constant, say $E$.

Therefore, we obtain the temporal equation

$$
\phi(t) = Ce^{-iEt/\hbar}
$$

and the spatial equation

$$
\left[-\frac{{\hbar}^2}{2m} \nabla^2  + V(\vec{r}) \right] \psi(\vec{r}) = E \psi(\vec{r})
$$

also represented by

$$
\hat{H} \psi = E\psi
$$

which gives stationary state solutions. This equation is called the time-independent Schrödinger equation.

Hence, solutions to time-dependent Schrödinger equation are given by

$$
\Psi(\vec{r}, t) = \psi(\vec{r}) e^{-iEt/\hbar}
$$

Therefore, a general state is given by

$$
\Psi(\vec{r}, t) = \sum_n c_n \psi_n(\vec{r}) e^{-i E_n t/\hbar}
$$

### Canonical Commutation Relations in Three Dimensions

The position and momentum operators in three dimensions satisfy

$$
[\hat{x}_i, \hat{p}_j ] = i \hbar \delta_{ij}
$$

and

$$
[ \hat{x}_i, \hat{x}_j ]= 0, \quad \left[\hat{p}_i, \hat{p}_j \right] = 0
$$

These can be proved simply by applying these commutators on an arbitrary state $\psi$ where

$$
\hat{x} \psi = x \psi, \quad \hat{p}_j \psi = -i\hbar \frac{\partial \psi}{\partial x_j}
$$

### Heisenberg's Uncertainty Principle in Three Dimensions

From the generalized uncertainty relation in [Mathematical Formalism](./05-mathematical-formalism.md#generalized-uncertainty-principle), we obtain

$$
\Delta{x_i} \Delta{p_j} \geq \frac{\hbar}{2} \delta_{ij}
$$

One can interpret from this that heiseinberg's uncertainty principle still holds in that particular spatial direction's position and momentum operators.

It shall be noted that no nonzero lower bound is obtained by the uncertainty principle between position and momentum operators from different spatial directions, for example $\Delta x \Delta p_y$.

### Ehrenfest's Theorem in Three Dimensions

We know the [Generalized Ehrenfest's Theorem](./05-mathematical-formalism.md#generalized-ehrenfest-theorem).

Assume the positiion and the canonical momentum operators have no explicit time dependence.

Also, for a particle of mass $m$ moving in a scalar potential $V(\vec{r})$, the Hamiltonian is

$$
\hat{H} = \frac{\hat{\vec{p}}^2}{2m} + V(\vec{r})
$$

Thus, applying Ehrenfest's theorem to $\hat{x}$,

$$
\frac{d\langle \hat{x}_i \rangle}{dt} = \frac{1}{i\hbar} (\left[\hat{x}_i, \hat{H} \right])
$$

Now,

$$
\left[\hat{x}_i, \hat{H} \right] = \left[ \hat{x}_i, \frac{1}{2m} {\sum_j{\hat{p_j}^2}} + V \right]
$$

Since $[\hat{x}_i, V(\vec{r})] = 0$, we get

$$
[\hat{x}_i, \hat{H}] = \frac{1}{2m} \sum_j {[\hat{x}_i, \hat{p}^2_j]}
$$

Using the commutator identity for three operators, we obtain

$$
[\hat{x}_i, \hat{p}^2_j] = 2i\hbar \delta_{ij} \hat{p}_j
$$

Therefore, on substituting and simplifying, we obtain

$$
\frac{d \langle \hat{x}_i \rangle}{dt} = \frac{\langle \hat{\vec{p}} \rangle}{m}
$$

On combining all three Cartesian components,

$$
\boxed{\frac{d\langle \hat{\vec{r}} \rangle}{dt} = \frac{\langle \hat{\vec{p}}\rangle}{m}}
$$

Similarly,

$$
\frac{d\langle \hat{p}_i \rangle}{dt} = \frac{1}{i\hbar} ([\hat{p}_i, \hat{H}])
$$

On expanding and simplifying the commutator, we get

$$
[\hat{p}_i, \hat{H}] = [\hat{p}_i, V]
$$

since the canonical momentum components commute.

On evaluating the commutator by applying it to a wavefunction $\psi$, we get

$$
[\hat{p}_i, V] = -i \hbar \frac{\partial V}{\partial x_i}
$$

On substituting and simplifying, we get

$$
\frac{d \langle \hat{p}_i \rangle}{dt} = -\left \langle \frac{\partial V}{\partial x_i} \right \rangle
$$

On combining all three Cartesian components, we get

$$
\boxed{\frac{d \langle \hat{\vec{p}} \rangle}{dt} = -\langle \nabla V\rangle}
$$

Combining the two results gives

$$
m \frac{d^2 \langle \hat{\vec{r}} \rangle}{dt^2} = -\langle \nabla V(\hat{\vec{r}}) \rangle = \langle \hat{\vec{F}} \rangle
$$

where $\hat{F} = -\nabla V(\hat{\vec{r}})$ is the force.

It shall be noted though that generally

$$
\langle \nabla V(\hat{\vec{r}}) \rangle \neq \nabla V(\langle \hat{\vec{r}} \rangle)
$$

## Particle in a Three-Dimensional Cubic Box

Consider a particle of mass $m$ confined to a cube of side lenght $a$ such that the potential is

$$
V(x, y, z) = \begin{cases}0, & 0 < x, y, z < a, \\ \infty, & \text{ otherwise } \end{cases}
$$

Therefore, inside the cube, the time-independent Schrödinger equation is

$$
-\frac{\hbar^2}{2m} \nabla^2 \psi = E\psi
$$

Expanding the Laplacian, we get

$$
-\frac{\hbar^2}{2m} \left(\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} + \frac{\partial^2 \psi}{\partial z^2} \right) = E\psi
$$

Assume a solution of the form $\psi(x, y, z) = X(x) Y(y) Z(z)$ to apply separation of variables.

Substituting it into the Schrödinger equation and dividing by $XYZ$ wherever it is nonzero, we get

$$
-\frac{\hbar^2}{2mX} \frac{d^2 X}{dx^2} -\frac{\hbar^2}{2mY} \frac{d^2 Y}{dy^2} -\frac{\hbar^2}{2mZ} \frac{d^2 Z}{dz^2} = E
$$

Each term depends on a different independent variable and therefore, each must be constant.

Let these constants be $E_x, E_y, E_z$, such that

$$
E = E_x + E_y + E_Z
$$

This gives three independent equations, which essentially gives a three-dimensional problem reduced to three one-dimensional infinite-well problems.

The infinite potentials require the wavefunctions to vanish at the boundaries thus imposing the boundary conditions

1. $\psi(0, 0, 0) = \psi(a, 0, 0) = 0$
2. $\psi(0, 0, 0) = \psi(0, a, 0) = 0$
3. $\psi(0, 0, 0) = \psi(0, 0, a) = 0$

On satisfying the boundary conditions similar to the [1D Infinite well problem](./03-foundations-of-quantum-mechanics.md#particle-in-an-infinite-potential-well), we obtain the normalized wavefunctions for each Cartesian component

$$
X_{n_x}(x) = \sqrt{\frac{2}{a}} \sin\left( \frac{n_x \pi x}{a} \right), \quad k_x = \frac{n_x \pi}{a}
$$

$$
Y_{n_y}(y) = \sqrt{\frac{2}{a}} \sin\left( \frac{n_y \pi y}{a} \right), \quad k_y = \frac{n_y \pi}{a}
$$

$$
Z_{n_z}(z) = \sqrt{\frac{2}{a}} \sin\left( \frac{n_z \pi z}{a} \right), \quad k_z = \frac{n_z \pi}{a}
$$

Therefore,

$$
\psi_{n_x n_y n_z}(x, y, z) = \left(\frac{2}{a}\right)^{3/2} \sin\left(\frac{n_x \pi x}{a}\right) \sin\left(\frac{n_y \pi y}{a}\right) \sin\left(\frac{n_z \pi z}{a}\right)
$$

One can verify if it is normalized by

$$
\int_{-\infty}^{\infty} \int_{-\infty}^{\infty}  \int_{-\infty}^{\infty} dx dy dz |\psi_{n_x n_y n_z}|^2 = 1
$$

Now, for the energy eigenvalues we have

$$
E  = E_x + E_y + E_z = \frac{\hbar^2}{2m} (k_x^2 + k_y^2 + k_z^2)
$$

from which we get

$$
E_{n_x, n_y, n_z} = \frac{\hbar^2 \pi^2}{2ma^2} (n_x^2 + n_y^2 + n_z^2)
$$

where $n_x, n_y, n_z \in \mathcal{Z^+}$

The ground state energy is

$$
E_0 = E_{111} = \frac{3\hbar^2 \pi^2}{2ma^2}
$$

for $n_x = n_y = n_z = 1$ which does not have degeneracy or say $g(E_0) = 1$ where $g(E_n)$ denotes the degeneracy in the eigenstate $E_n$.

Now, for first excited state, we have

$$
E_1 = E_{112} = E_{121} = E_{211} = \frac{3\hbar^2\pi^2}{ma^2}
$$

and thus $g(E_1) = 3$.

The wavefunction for first excited state will thus be combination of the three corresponding eigenfunctions and given by

$$
\psi_1 = c_1 \psi_{112} + c_2 \psi_{121} + c_3\psi_{211}
$$

where $c_1, c_2, c_3 \in \mathcal{C}$ and from normalization, $|c_1|^2 + |c_2|^2 + |c_3|^2 = 1$.

This degeneracy arises due to the symmetric nature of the cubic problem and is often a feature in multi-dimensional symmetric problems.

## Schrödinger Equation in Spherical Coordinates

### Spherical Coordinates

A potential is said to be _spherically symmetric_ when it depends only on the distance from the origin, that is,

$$
V(x, y, z) = V(\vec{r})
$$

where $r = \sqrt{x^2 + y^2 + z^2}$.

In case of a spherically symmetric potential, it is more convenient to use spherical coordinates $(r, \theta, \phi)$.

The transformation between the Cartesian and spherical coordinates is

$$
x = r \sin \theta \cos \phi, \quad y = r \sin \theta \sin \phi, \quad z = r \cos \theta
$$

where $r \geq 0, \quad 0 \leq \theta \leq \pi, \quad 0 \leq \phi \leq 2\pi$.

Here, $\theta$ is the polar angle measured from the positive $z$-axis and $\phi$ is the azimuthal angle measured in the $xy$-plane.

### Laplacian in Spherical Coordinates

The gradient operator is

$$
\nabla = \hat{\vec{r}} \frac{\partial}{\partial r} + \hat{\vec{\theta}} \frac{1}{r} \frac{\partial}{\partial \theta} + \hat{\vec{\phi}} \frac{1}{r \sin \theta} \frac{\partial}{\partial \phi}
$$

The Laplacian is

$$
\nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} \left(r^2 \frac{\partial}{\partial r}\right) + \frac{1}{r^2 \sin \theta} \frac{\partial}{\partial \theta} \left(\sin \theta \frac{\partial}{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2}
$$

Refer to [Do It by Yourself: An Instructional Derivation of the Laplacian Operator in Spherical Polar Coordinates](https://www.mdpi.com/2227-7390/9/22/2943) for details about the derivation for obtaining the Laplacian.

The volume element transforms as

$$
d^3 r = r^2 \sin \theta dr d\theta d\phi
$$

### Seperation of Radial and Angular Variables

Substituting the Laplacian into the time-independent Schrödinger equation for $V = V(\vec{r})$, we get

$$
-\frac{\hbar^2}{2m} \left[\frac{1}{r^2} \frac{\partial \psi}{\partial r} \left(r^2 \frac{\partial \psi}{\partial r}\right) + \frac{1}{r^2 \sin \theta} \frac{\partial \psi}{\partial \theta} \left(\sin \theta \frac{\partial \psi}{\partial \theta} \right) + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi^2} \right] + V(\vec{r}) \psi = E\psi
$$

Assume the solution is of the form $\psi(r, \theta, \phi) = R(r) Y(\theta, \phi)$ for variable separation.

On substituting it, dividing by $RY$, and simplifying, we obtain

$$
\frac{1}{R} \frac{d}{dr} \left(r^2 \frac{dR}{dr}\right) + \frac{2mr^2}{\hbar^2} [E - V(\vec{r})] = -\frac{1}{Y} \left[ \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial Y}{\partial \theta} \right) + \frac{1}{\sin^2 \theta} \frac{\partial^2 Y}{\partial \phi^2} \right]
$$

Observe that right side depends only on $\theta, \phi$ and left side depends only on $r$. Thus, both must equal a constant, say $\lambda$.

### Separation of the Angular Equation

Consider the angular equation, and assume a separable solution $Y(\theta, \phi) = \Theta(\theta)\Phi(\phi)$.

Substituting, dividing by $\Theta \Phi$ and multiplying by $\sin^2 \theta$,

$$
\frac{\sin \theta}{\Theta} \frac{d}{d\theta}\left( \sin \theta \frac{d\Theta}{d\theta} \right) + \lambda {\sin^2 \theta} = - \frac{1}{\Phi} \frac{d^2 \Phi}{\phi^2}
$$

The left side depends only on $\theta$, while the right side depends only on $\phi$.

Therefore, both must equal a constantm say $m^2$.

Thus, we obtain

$$
\frac{d^2 \Phi}{d\phi^2} + m^2 \Phi = 0
$$

which is referred to as azimuthal equation, and

$$
\frac{1}{\sin \theta} \frac{d}{d\theta} \left(\sin \theta \frac{d \Theta}{d \theta} \right) + \left(\lambda - \frac{m^2}{\sin^2 \theta}\right)\Theta = 0
$$

which is referred to as polar equation.

### Azimuthal Equation and Quantization of $m$

Consider the azimuthal equation,

$$
\Phi'' + m^2 \Phi = 0
$$

Its solutions are given by

$$
\Phi(\phi) = Ae^{im\phi} + Be^{-im\phi}
$$

The solutions should not blow up, therefore, for a definite $m$,

$$
\Phi_m(\phi) = Ce^{im\phi}
$$

Due to the circular symmetry and periodicity, $\phi$ and $\phi + 2\pi$ represent same spatial direction and thus,

$$
\Phi_m(\phi + 2\pi) = \Phi_m(\phi)
$$

which gives

$$
e^{2\pi i m} = 1
$$

Therefore, $m \in \mathcal{Z}$>

On normalizing, we get

$$
|C|^2 = \frac{1}{2\pi}
$$

Therefore, on choosing $C$ real and positive, we have

$$
\Phi_m (\phi) = \frac{1}{\sqrt{2\pi}} e^{im\phi}, \quad m = 0, \pm 1, \pm 2, \dots
$$

### Polar Equation and Associated Legendre Functions

Now, in the polar equation we substitute $u = \cos \theta$ and on simplifying, we get

$$
(1-u^2) \Theta'' - 2u\Theta' + \left(\lambda - \frac{m^2}{1-u^2}\right)\Theta = 0
$$

which is an associated Legendre differential equation, if $\lambda$ takes the appropriate eigenvalues.

Now, define $\mu = |m|$. Substitute $\Theta(u) = (1-u^2)^{\mu/2} F(u)$ and simplifying gives

$$
(1-u^2) F'' - 2(\mu + 1)uF' + [\lambda - \mu(\mu + 1)]F = 0
$$

Since $u = \cos \theta$, the solution has to be physically acceptable over the entire interval $-1 \leq u \leq 1$. Note that $u = 1$ and $u = -1$ correspond to the north and south poles. The differential equation has singular points at these endponts. Consequently, not every mathematical solution is physically acceptable.

First, power series is used to investigate the solutions and on assuming

$$
F(u) = \sum_{k= 0}^{\infty} a_k u^k
$$

we obtain the recurrence relation

$$
a_{k+2} = \frac{(k + \mu)(k + \mu + 1) - \lambda}{(k+2)(k+1)} a_k
$$

Now, a physically acceptable angular wavefunction shall be obtained throughout $-1 \leq u \leq 1$.

Here, a nonterminating series might for $|u| < 1$ but not guaranteed to converge at $u = \pm 1$.

Also, from the recurrence relation, we have two independent sequences of coefficents, even and odd. For a generic $\lambda$, neither sequence terminates and solutions cannot be made regular to both poles.

But suppose that for some nonnegative integer $n$,

$$
(n + \mu)(n + \mu + 1) - \lambda = 0
$$

Then,

$$
a_{n+2} = 0
$$

which thus terminates the series at degree $n$, that is, the term $u^n$. This terminating solution can be chosen and the singular solution discarded.

Therefore, from here we obtain

$$
\lambda = (n + \mu) (n + \mu + 1)
$$

Defining $l = n + \mu$, we obtain

$$
\lambda = l(l+1)
$$

It shall be noted that the argument is not all infintie series are singular but for this Legendre problem, requiring regular at both poles restricts $\lambda$ to $l(l+1)$ and corresponding regular $F$ solutions are polynomials. Proving this restriction rigorously requires an analysis of the endpoint behavior. Refer to [University of Oxford - Differential Equations Lecture Notes, Section 6.3.1, page 53](https://www.maths.ox.ac.uk/system/files/attachments/part%20a.pdf) for the same.

Coming back to $l$, we now want to establish the bounds on $l$ and $m$.

By definition, $l = n + |m|$. Since $n$ and $|m|$ are nonnegative integers,

$$
l = 0, 1, 2, \dots
$$

Now,

$$
n = l - |m| \geq 0
$$

Thus, $ -l \leq m \leq l$.

Therefore,

$$
\boxed{l = 0, 1, 2, \dots, \quad m = -l, -l+1, \dots, l-1, l}
$$

So, for each $l$, there are $2l + 1$ allowed values of $m$.

### Spherical Harmonics

On solving the angular part of the Schrödinger equation for a central potential, we have

$$
Y(\theta, \phi) = \Theta(\theta) \Phi(\phi)
$$

where

$$
\Phi_m(\phi) = \frac{1}{\sqrt{2\pi}}e^{im\phi}
$$

and the solution for $\Theta{\theta}$ is given by the polar equation

$$
(1 - u^2) \frac{d^2 \Theta}{du^2} - 2u \frac{d\Theta}{du} + \left[l(l+1) - \frac{m^2}{1-u^2}\right] \Theta = 0
$$

where $u = \cos \theta$ and $l = 0, 1, 2, \dots, \quad -l \leq m \leq l$.

Consider the special case $m = 0$. The polar equation reduces to

$$
(1 - u^2) \Theta'' - 2u \Theta' + l(l+1)\Theta = 0
$$

which is Legendre's differential equation.

The solutions are the Legendre polynomials constructed by

$$
P_l(u) = \frac{1}{2^l l!} \frac{d^l}{du^l} (u^2 - 1)^l
$$

which are conventionally normalized by $P_l(1) = 1$

These satisfy the relation

$$
\int_{0}^{\pi} P_l(\cos \theta) P_{l'} (\cos \theta) d\theta = \frac{2}{2l+1} \delta_{ll'}
$$

For a general $m$, the polar equation is the associated Legendre equation and its regular solutions are proportional to associated Legendre functions.

For $0 \leq m \leq l$, these are given by

$$
P^m_l (u) = (-1)^m (1-u^2)^{m/2} \frac{d^m}{du^m} P_l(u)
$$

For negative orders, we have

$$
P^{-m}_l(u) = (-1)^m \frac{(l-m)!}{(l+m)!} P^m_l(u), \quad m \geq 0
$$

Therefore, the polar solutions can be written as

$$
\Theta_{lm}(\theta) \propto P^m_l (\cos \theta)
$$

We ignore the normalization constant for this as we aim to normalize the complete angular wavefunction $Y^m_l(\theta, \phi)$.

Thus, combining azimuthal and polar solutions, ignoring their individual normalization constants, we get

$$
Y^m_l(\theta, \phi) = N_{lm} P^m_l (\cos \theta) e^{im\phi}
$$

where $N_{lm}$ is a normalization constant.

These functions are referred to as **spherical harmonics**.

Now, we impose normalization over the unit sphere,

$$
\int_{0}^{2\pi} \int_{0}^{\pi} |Y^m_l (\theta, \phi)|^2 \sin \theta d\theta d\phi = 1
$$

On substituting $Y^m_l$ and with $u = \cos \theta$, we get

$$
2\pi |N_{lm}|^2 \int_{-1}^{1} [P^m_l(u)]^2 du = 1
$$

Using the associated Legendre normalization identity,

$$
\int_{-1}^{1} [P^m_l(u)]^2 du = \frac{2(l+m)!}{(2l+1)(l-m)!}
$$

we obtain

$$
|N_{lm}|^2 = \frac{2l+1}{4\pi} \frac{(l -m)!}{(l+m)!}
$$

Thus, we get

$$
\boxed{Y^m_l(\theta, \phi) = \sqrt{\frac{2l+1}{4\pi} \frac{(l-m)!}{(l+m)!}} P^m_l (\cos \theta) e^{im\phi}}
$$

The spherical harmonics satisfy

$$
\boxed{\int_{0}^{2\pi} \int_{0}^{2\pi} {Y^{m}_l}^{\ast} (\theta, \phi) Y^{m'}_{l'} (\theta, \phi) \sin \theta \, d\theta \,d\phi = \delta_{ll'} \delta_{mm'}}
$$

They also form a complete orthonormal basis for square-integrable functions on the sphere, such that an angular wavefunction can be given by

$$
f(\theta, \phi) = \sum_{l = 0}^{\infty} \sum_{m = -l}^{l} c_{lm} Y^{m}_l (\theta, \phi)
$$

where

$$
c_{lm} = \int_{0}^{2\pi} \int_{0}^{\pi} {Y^{m}_l}^{\ast} f(\theta, \phi) \sin \theta \, d\theta \, d\phi
$$

### Radial Schrödinger Equation

For a particle of mass $M$ in a central potential $V(r)$, we had

$$
\psi(r, \theta, \phi) = R(r) Y^m_l(\theta, \phi)
$$

Substituting the obtained $\lambda = l(l+1)$ in the radial equation obtained by separable of variables, expanding the derivative and dividing by $r^2$, we have

$$
\boxed{\frac{d^2 R}{dr^2} + \frac{2}{r} \frac{dR}{dr} + \left[\frac{2M}{\hbar^2} (E - V(r)) - \frac{l(l+1)}{r^2}\right] R = 0}
$$

We now substitute $U(r) = rR(r)$, so that

$$
R(r) = \frac{U(r)}{r}
$$

Substituting it in the obtained radial equation, multiplying by $r$ and rearranging, we obtain

$$
-\frac{\hbar^2}{2M} \frac{d^2 U}{dr^2} + \left[ V(r) + \frac{\hbar^2 l (l+1)}{2Mr^2}\right]U = EU
$$

which has the form of a one-dimnesional time-independent Schrödinger equation except that its domain is restricted to $r \geq 0$.

Here, we define the effective radial potential

$$
V_{eff}(r) = V(r) + \frac{\hbar^2 l(l+1)}{2Mr^2}
$$

From this, we obtain the radial part of the solutions.

From all this, we know that for a central potential, the stationary-state wavefunctions have the form

$$
\psi_{nlm}(r, \theta, \phi) = R_{nl}(r) Y^m_l (\theta, \phi)
$$

The orthonormality condition for normalized bound states is

$$
\boxed{\int_{\mathcal{R^3}} \psi^{\ast}_{nlm}(\vec{r}) \psi_{n'l'm'}(\vec{r}) d^3 r = \delta_{nn'} \delta_{ll'} \delta_{mm'}}
$$

Due to the orthonormality of spherical harmonics, for a fixed $l$, radial functions must satisfy

$$
\boxed{\int_0^{\infty}  R^{\ast}_{nl} (r) R_{n'l'}(r) r^2 dr = \delta_{nn'}}
$$

#### Infinite Spherical Well

Consider a particle confined within a sphere of radius $a$ such that

$$
V(r) = \begin{cases}0, & 0 \leq r \leq a, \\ \infty, & r \geq a \end{cases}
$$

Thus, inside the sphere, the reduced radial equation becomes

$$
\frac{d^2 U}{dr^2} + \left[k^2 - \frac{l(l+1)}{r^2}\right]U = 0, \quad k^2 = \frac{2ME}{\hbar^2}
$$

Consider $l = 0$.

The general solution is given by

$$
U(r) = A \sin (kr) + B \cos (kr)
$$

Regularity of $R = U/r$ at $r = 0$ requires $U(0) = 0$ giving $B=0$. At the spherical wall, $U(a) = 0$. Therefore,

$$
\sin(ka) = 0 \implies ka = n\pi, \quad n = 1, 2, 3, \dots
$$

Thus,

$$
k_n = \frac{n\pi}{a}
$$

The allowed energies are

$$
E_{n0} = \frac{\hbar^2 n^2 \pi^2}{2Ma^2}
$$

and the radial wavefunction

$$
R_{n0}(r) = \sqrt{\frac{2}{a}} \frac{\sin (n\pi r/a)}{r}
$$

The value at $r=0$ is understood by taking the finite limit.

Now, consider $l > 0$. The equation is

$$
U'' + \left[k^2 - \frac{l(l+1)}{r^2} \right]U = 0
$$

thus,

$$
R'' + \frac{2}{r} R' + \left[k^2 - \frac{l(l+1)}{r^2}\right]R = 0
$$

which is the spherical Bessel differential equation.

Its general solution is

$$
R(r) = Aj_l(kr) + By_l(kr)
$$

where $j_l$ and $y_l$ are spherical Bessel functions, expressed by

$$
j_l(x) = (-x)^l \left(\frac{1}{x} \frac{d}{dx} \right)^l \frac{\sin x}{x}
$$

and

$$
y_l(x) = -(-x)^l\left(\frac{1}{x} \frac{d}{dx} \right)^l \frac{\cos x}{x}
$$

Since $y_l(kr)$ diverges at $r = 0$, we choose $B=0$.

Therefore,

$$
R(r) = A_{nl}j_l(kr)
$$

Applying the boundary conditions at $r = a$, $R(a) = 0$, we have $j_l(ka) = 0$.

Let $\alpha_{ln}$ denote the $n$-th positive zero of $j_l(x)$. Then,

$$
k_{ln} = \frac{\alpha_{ln}}{a}
$$

Hence, the energy eigenvalues are

$$
E_{nl} = \frac{\hbar^2 \alpha_{ln}^2}{2Ma^2}
$$

For the radial part of the solution, the constant $A_{nl}$ can be determined from the normalization condition,

$$
\int_{0}^{a} |R_{nl}(r)|^2 r^2 dr = 1
$$

Combining the radial solutions with the spherical harmonics, we have

$$
\psi_{nlm} (r, \theta, \phi) = A_{nl} j_l\left( \frac{\alpha_{ln}r}{a} \right)Y^m_l(\theta, \phi), \quad r < a
$$

Outside the sphere, $\psi = 0$.

Here, $n = 1, 2, \dots,$ labels successive radial zeros, while $l = 0, 1, 2, \dots,$ and $m = -l, \dots, l$.

## Hydrogen Atom

Hydrogen consists of an electron and a proton which interact through the attract Coulomb potential.

Hydrogen is a two-particle system and thus it is first reduced to an equivalent one-particle problem before applying the radial Schrödinger equation.

### Two Body Problem and Reduced Mass

Let the masses of electron and proton be $m_e$ and $m_p$, and position vectors $\vec{r}_e$ and $\vec{r}_p$ respectively.

Their electrostatic potential energy is

$$
V(\vec{r}_e, \vec{r}_p) = \frac{e^2}{4\pi\varepsilon_0 |\vec{r}_e - \vec{r}_p|}
$$

The time-independent SchrödingSchrödingerer equation for the two particle system with Hamiltonian inspired from the total energy in the classical analogue is

$$
\left[-\frac{-\hbar^2}{2m_e} \nabla_e^2 -\frac{-\hbar^2}{2m_p} \nabla_p^2 - \frac{e^2}{4\pi\varepsilon_0 |\vec{r}_e - \vec{r}_p|}\right] \psi = E_{tot}\psi
$$

Now, we define the relative position

$$
\vec{r} = \vec{r}_e - \vec{r}_p
$$

and the centre of mass position

$$
\vec{R} = \frac{m_e \vec{r}_e + m_p \vec{r}_p}{m_e + m_p}
$$

Define the total mass $M = m_e + m_p$

By the chain rule, we have

$$
\nabla_e = \frac{m_e}{M} \nabla_R + \nabla_r
$$

$$
\nabla_p = \frac{m_p}{M} \nabla_R - \nabla_r
$$

Now, define the reduced mass

$$
\mu = \frac{m_e m_p}{m_e + m_p}
$$

On substituting these, we obtain

$$
\left[-\frac{\hbar^2}{2M} \nabla_R^2 - \frac{\hbar^2}{2\mu} \nabla_r^2 - \frac{e^2}{4\pi\varepsilon_0 r}\right] \psi = E_{tot}\psi
$$

Since the potential depends only on the relative distance $r$, we can write

$$
\psi(\vec{R}, \vec{r}) = \chi(\vec{R}) \phi(\vec{r})
$$

### Separation of Centre of Mass and Relative Motion

Substituting and separating variables gives two equations,

for the centre of mass,

$$
-\frac{\hbar^2}{2M} \nabla_R^2 \chi = E_{CM}\xi
$$

and for relative motion

$$
\left[-\frac{\hbar^2}{2\mu} \nabla_r^2 - \frac{e^2}{4\pi\varepsilon_0 r}\right] \psi = E\psi
$$

### Solution of the Hydrogen Radial Equation

We obtain the reduced radial Schrödinger equation

$$
-\frac{\hbar^2}{2m_e}\frac{d^2 U}{dr^2} + \left[ - \frac{e^2}{4\pi\varepsilon_0 r} + \frac{\hbar^2l(l+1)}{2m_e r^2}\right] U = EU
$$

where $U(r) = rR(r)$.

Since $m_p \gg m_e$, take $\mu \approx m_e$.

For bound states ($E < 0$), this equation can be solved to obtain the energy eigenvalues

$$
\boxed{E_n = -\frac{m_e e^4}{2(4\pi \varepsilon_0)^2 \hbar^2 n^2} \approx -\frac{13.6}{n^2} eV}
$$

and the normalized radial wavefunctions

$$
\boxed{R_{nl}(r) = \sqrt{\left(\frac{2}{na_0}\right)^3 \frac{(n-l-1)!}{2n(n+l)!} e^{-\rho/2} \rho^l L^{2l+1}_{n-l-1}(\rho)}}
$$

where

$$
a_0 = \frac{4\pi\varespilon_0\hbar^2}{m_e e^2}, \quad \rho = \frac{2r}{na_0}
$$

$L^{2l+1}_{n-l-1}$ denote a generalized Laguerre polynomial, and $a_0 = 0.529 \times 10^{-10}$ denotes the Bohr radius.

The quantum numbers satisfy

$$
\boxed{n = 1, 2, \dots, \quad l = 0, 1, \dots, n-1, \quad m = -l, \dots, l}
$$

Refer to [Duke University - ECE 590 Lecture Notes, Chapter 2: The Hydrogen Atom](https://people.ee.duke.edu/~jungsang/ECE590_01/LectureNotes2-Rev.pdf?utm_source=chatgpt.com) for details about the derivation.

### Hydrogen-Energy spectrum

We have established that bound-state energy eigenvalues of hydrogen are

$$
E_n = -\frac{13.6}{n^2} eV, \quad n = 1, 2, \dots
$$

The energy depends only on the principal quantum number $n$, making states with different $l$ and $m$ but same $n$ degenerate. Ignoring spin, each energy level has the degeneracy given by

$$
g(E) = \sum_{l=0}^{n-1} (2l + 1) = n^2
$$

and $g(E) = 2n^2$ if spin is included.

When an electron transitions from a higher energy level $n_i$ to a lower level $n_f$, a photon is emitted with energy

$$
h \nu = E_{n_i} - E{n_f}
$$

Hence, the Rydberg formula is

$$
\frac{1}{\lambda} = R_H \left(\frac{1}{n_f^2} - \frac{1}{n_i^2} \right), \quad n_i > n_f
$$

where $R_H \approx 1.097 \times 10^7 m^{-1}$

The series is said to be Lyman when $n_f = 1$ (lies in Ultraviolet region), Balmer when $n_f = 2$ (in Visible light region), and Paschen when $n_f = 3$ (in Infrared region).

The energy levels converge toward $E = 0$ as $n \to \infty$ corresponding to the ionization threshold.
