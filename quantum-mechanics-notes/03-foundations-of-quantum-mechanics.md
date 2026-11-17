# Foundations of Quantum Mechanics

## The Schrödinger Equation

With Schrödinger's equation and Born's interpretation as the starting framework of non-relativistic quantum mechanics, we begin with the simplest quantum system - a single non relativistic particle moving in one spatial dimension.  
The state of the particle is described by a wavefunction

$$
\Psi(x, t)
$$

The time dependent Schrödinger equation for it is given by

$$
i\hbar \frac{\partial \Psi(x, t)}{\partial t} = - \frac{\hbar^2}{2m} \frac{\partial^2 \Psi(x, t)}{\partial x^2} + V(x, t)\Psi(x, t)
$$

where $m$ is the mass of the particle, $V(x, t)$ is its potential energy and $\Psi(x, t)$ is its wavefunction.

### Normalization

From Born's statistical interpretation of Wavefunction, we treat the quantity $|\Psi(x,t)|^2$ as probability density for finding the particle at position $x$ at time $t$.

Define the probability density

$$
p(x, t)=|\Psi(x, t)|^2
$$

Thus, the probability of finding the particle between positions $a$ and $b$ is given by

$$
P(a \leq x \leq b) = \int_a^b p(x, t) dx
$$

Since the particle must be found somewhere, the total probability of finding it over all space must be 1 and thus,

$$
\int_{-\infty}^{\infty}{p(x, t)}dx=1
$$

A wavefunction satisfying this condition is said to be normalized.

A wavefunction is physically acceptable if

1. It satisfies the Schrödinger equation
2. It is normalizable so that it can have a valid probability interpretation

It shall be noted that if $\Psi(x, t)$ is a solution to the Schrödinger equation, then $A\Psi(x, t)$ is also a solution where $A$ is any complex constant.

### Statement of Probability Conservation

Suppose the wavefunction is normalized at some initial time. We can ask whether Schrödinger evolution preserves this normalization.

$$
\frac{d}{dt}\int_{-\infty}^{\infty}{|\Psi|^2 dx} = \int_{-\infty}^{\infty} {\frac{\partial}{\partial t}(\Psi^{\ast} \Psi) dx}
$$

and using the product rule,

$$
\int_{-\infty}^{\infty} {\left(\frac{\partial \Psi^{\ast}}{\partial t} \Psi + \Psi^{\ast} \frac{\partial \Psi}{\partial t}\right)dx}
$$

Taking complex conjugate and using Schrödinger equation to make substitution, potential terms cancel and we get

$$
\frac{d}{dt} \int_{-\infty}^{\infty}{|\Psi|^2 dx} = \frac{i \hbar}{2m} \int_{-\infty}^{\infty} {\left(\Psi^{\ast} \frac{\partial^2 \Psi}{\partial x^2} - \Psi \frac{\partial^2 \Psi^{\ast}}{\partial x^2}\right) dx}
$$

On solving and applying limits,

$$
\frac{d}{dt} \int_{-\infty}^{\infty} {|\Psi(x, t)|^2 dx} = 0
$$

Thus, Schrödinger evolution cannot cause total probability to disappear or spontaneously appear even though it may redistribute itself throughout space.

### Expectation Values

For an ordinary continuous random variable $x$, the expectation value is the probability-weighted average

$$
\langle x \rangle = \int_{-\infty}^{\infty} xp(x) dx
$$

More generally, for an ordinary scaler-valued function $f(x)$,

$$
\langle f(x) \rangle = \int_{-\infty}^{\infty} f(x) p(x) dx
$$

equivalently,

$$
\langle f(x) \rangle = \int_{-\infty}^{\infty} \Psi^{\ast} f(x)\Psi dx
$$

### Spread of the Distribution

The expectation value gives the center of the probability distribution, but it does not tell about how widely spread it is.

Thus, we define variance

$$
(\Delta x)^2 = {\langle x^2 \rangle} - {\langle x \rangle}^2
$$

and the standard deviation is given by

$$
\Delta x = \sqrt{{\langle x^2 \rangle} - {\langle x \rangle}^2}
$$

### Position and Momentum

Classically, momentum is related to the time derivate of position by

$$
p = m \frac{dx}{dt}
$$

Quantum mechanically, since we describe a particle by wavefunctiom, we seek a different representation in terms of operators for momentum.

Since we have,

$$
\langle x \rangle = \int x |\Psi(x, t)|^2  dx
$$

we take

$$
\hat{x} = x
$$

to denote that it acts on $\Psi$ and have a unified framework for every observable.
Now,

$$
\frac{d \langle x \rangle}{dt} = \int x \frac{\partial}{\partial t}|\Psi(x, t)|^2  dx
$$

On simplifying it using integration by parts and removing away the boundary term since $\Psi \to 0$ at $\pm \infty$, we get

$$
\frac{d \langle x \rangle}{dt} = - \frac{i\hbar}{m} \int{\left( \Psi^{\ast} \frac{\partial \Psi}{\partial x} \right) dx}
$$

which gives

$$
\langle p \rangle = m \frac{d \langle x \rangle}{dt} = -i\hbar \int{\left( \Psi^{\ast} \frac{\partial \Psi}{\partial x} \right) dx}
$$

Here, we have

$$
\boxed{\hat{p} = -i\hbar \frac{\partial}{\partial x}}
$$

All classical dynamical variables can be expressed in terms of position and momentum and thus for such quantities, we have

$$
\langle Q \rangle = \int{\Psi^{\ast} \left[ Q(x, -i \hbar \frac{\partial}{\partial x} \right] \Psi \, dx }
$$

### Heisenberg's Uncertainty Principle

Qualitatively, Heisenberg's uncertainty principle states that

$$
\sigma_x \sigma_p \geq \frac{\hbar}{2}
$$

where $\sigma_x$ is the standard deviation in $x$, and $\sigma_p$ is the standard deviation in $p$.

This will be proved later.

Gaussian wavefunction centered around zero, given by,

$$
\Psi(x, t) = Ae^{-ait}e^{-amx^2/\hbar}
$$

has the minimum uncertainty product of $\hbar/2$.

Physically, the more precise a wavefunction's position is, the less precise the momentum. This can also be observed in classical thought experiments.

## Stationary States

In Schrödinger equation, if potential is assumed to be time-independent, one can apply separation of variables by taking $\Psi(x, t) = \psi(x)\phi(t)$ and obtain the Time-Independent Schrödinger equation for one spatial dimension

$$
-\frac{\hbar^2}{2m} \frac{d^2 \psi}{dx^2} + V\psi = E\psi
$$

along with

$$
\frac{d\phi}{dt} = \frac{-iE}{\hbar} \phi
$$

This gives us $\phi(t) = e^{-iEt/\hbar}$. Thus, we get $\Psi(x, t) = \psi(x) e^{-iEt/\hbar}$ where $\psi(x)$ are the spatial parts of solutions of the time-independent Schrödinger equation which are known as **stationary states**.

### Concept of Hamiltonian

Classically, the total energy is called the Hamiltonian

$$
H(x,p)=\frac{p^2}{2m}+V(x).
$$

Equivalently, in quantum mechanics,

$$
\hat{H}(\hat{x},\hat{p}) = \frac{\hat{p}^2}{2m}+V(\hat{x})
$$

After canonical substitution of quantum operators, we have

$$
\hat{H} =-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+ V(x).
$$

The time-dependent Schrödinger equation is

$$
\boxed{i\hbar\frac{\partial\Psi(x,t)}{\partial t} =\hat{H}\Psi(x,t)}
$$

For a time-independent potential, we can use a separable solution

$$
\Psi(x,t)=\psi(x)\phi(t).
$$

Substitution into the time-dependent Schrödinger equation gives

$$
i\hbar\frac{1}{\phi}\frac{d\phi}{dt}=\frac{1}{\psi}\hat H\psi
$$

The left-hand side depends only on $t$, while the right-hand side
depends only on $x$. Therefore, both must equal the same constant,
which we denote by $E$:

$$
i\hbar\frac{1}{\phi}\frac{d\phi}{dt}=\frac{1}{\psi}\hat H\psi=E
$$

Thus,

$$
\boxed{\hat H\psi=E\psi}
$$

and

$$
\frac{d\phi}{dt}=-\frac{iE}{\hbar}\phi
$$

giving

$$
\phi(t)=e^{-iEt/\hbar}
$$

Thus, the complete stationary-state solution is

$$
\boxed{\Psi(x,t)=\psi(x)e^{-iEt/\hbar}}
$$

The separation constant $E$ is identified as the energy because $\hat H$ is the Hamiltonian (energy operator), and for the corresponding normalized state,

$$
\langle H\rangle=E,
$$

and the variance of energy is

$$
\sigma_H^2=0.
$$

Thus, every separable solution has the property that _every measurement of the total energy is certain to return the value_ $E$.

### General Solution

The general solution of the time-dependent Schrödinger equation can be expressed as a linear superposition of separable solutions

$$
\Psi(x,t)=\sum_{n=1}^{\infty}c_n\psi_n(x)e^{-iE_n t/\hbar}\sum_{n=1}^{\infty}c_n\Psi_n(x,t)
$$

i.e. the linear combination of separable solutions $\{\psi_n(x)\}_{n=1,2,\dots}$, and where

$$
\Psi_n(x,t)=\psi_n(x)e^{-iE_n t/\hbar}.
$$

Here, $|c_n|^2$ is the probability that a measurement of the energy would return the value $E_n$, and thus

$$
\sum_{n=1}^{\infty}|c_n|^2=1
$$

## Particle in an Infinite Potential Well

We define the potential of a particle in an infinite potential well by

$$
V(x) =
\begin{cases}
0, & \text{if }0 \leq x \leq a \\
\infty, & \text{otherwise}
\end{cases}
$$

Since the potential is infinite outside the well, the wavefunction vanishes outside the well. Taking the wavefunction to satisfy the usual boundary condition at the walls,

$$
\psi(0) = 0 \quad,
\psi(a) = 0
$$

We don't comment upon differentiability for $x < 0$ and $x > a$ since wavefunction is zero outside the well and physically, particle cannot pentrate the barrier at all.

Thus, inside the region, the wavefunction satisfies

$$
-\frac{\hbar^2}{2m} \frac{d^2 \psi}{dx^2} = E \psi
$$

On solving the above equation, we obtain the solution of the form

$$
\psi(x) = A \cos(kx) + B \sin (kx)
$$

where $k = \sqrt{2mE/\hbar^2}$

On satisfying boundary conditions, we get $A = 0$ and $ka = n\pi$, $n = 1, 2, 3, \dots$.

Now, $k = \sqrt{2mE/\hbar^2}$ so

$$
E = \frac{\hbar^2 k^2}{2m}
$$

and thus we have

$$
E_n = \frac{n^2 \pi^2 \hbar^2}{2m a^2}
$$

Now, to determine $B$, we use the normalization property giving $|B| = \sqrt{2/a}$ and conventionally we take it to be positive. This gives us

$$
\psi_n(x) = \sqrt{\frac{2}{a}} \sin \left(\frac{n\pi}{a}x \right)
$$

from which we get the general solution

$$
\Psi(x, t) = \sum_{n=1}^{\infty} {c_n \Psi_n(x, t)}
$$

where

$$
\Psi_n(x, t) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi}{a} x\right) e^{-i\frac{n^2 \pi^2 \hbar}{2ma^2} t}
$$

$\Psi_n$'s are alternatively even and odd wih respect to center of well $x = a/2$ and one more node comes between $0$ and $a$ with successive states. Odd $n$ gives an even state about the center and vice versa.

It can also be found that

$$
\int_{0}^{a}{\psi_m^{\ast}\psi_n dx} = \delta_{mn}
$$

where $\delta_{mn}$ denotes Kronecker delta. Thus $\psi_n$'s are mutually orthonormal (mutually orthogonal and normalized).

## Particle in a Finite Potential Well

Practically, we deal with finite potential values and thus, here we define

$$
V(x) =
\begin{cases}
0, & \text{if }0 \leq x \leq a \\
V_0, & \text{otherwise}
\end{cases}
$$

If $E > V_0$, the particle can be regarded as free (unbound), since its kinetic energy is positive even outside the well.

For $E < V_0$, and since $V_0$ is finite, we obtain the boundary conditions

$$
\psi_I (0) = \psi_{II} (0) \quad,
\psi_I (0)' = \psi_{II}' (0)
$$

and

$$
\psi_{II} (a) = \psi_{III} (a) \quad,
\psi_{II}' (a) = \psi_{III}' (a)
$$

where $\psi_I(x)$ denotes wavefunction for $x < 0$, $\psi_{II}(x)$ denotes wavefunction for $0 \leq x \leq a$ and $\psi_{III}(x)$ denotes wavefunction for $x > a$.

Now, for $0 \leq x \leq a$, from Schrödinger's equation we have

$$
-\frac{\hbar^2}{2m} \frac{d^2 \psi_{II}(x)}{dx^2} = E \psi_{II}(x)
$$

which gives solution of the form

$$
\psi_{II}(x) = Ce^{ikx} + De^{-ikx}
$$

where $k^2 = 2mE/\hbar^2$

For $x < 0$, from Schrödinger's equation we have

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi_{I}(x)}{dx^2} + V_0\psi_{I}(x) = E \psi_{I}(x)
$$

From this, we obtain solution of the form

$$
\psi_{I}(x) = Ae^{\kappa x} + Be^{-\kappa x}
$$

where $\kappa^2 = 2m(V_0-E)/\hbar^2$.

For $x > a$, we similarly have solution of the form

$$
\psi_{III}(x) = Fe^{\kappa x} + Ge^{-\kappa x}
$$

From boundary conditions,

$$
A + B = C + D
$$

$$
Ce^{ika} + De^{-ika} = Fe^{\kappa a} + Ge^{-\kappa a}
$$

$$
\kappa(A - B) = ik(C - D)
$$

$$
ik(Ce^{ika} - De^{-ika}) = \kappa(Fe^{\kappa a} - Ge^{-\kappa a})
$$

This information can be used to find out energy levels.

## Potential Barrier

### Step Potential

We consider the potential function

$$
V(x) =
\begin{cases}
V_0, & x \geq a \\
0, & x < a
\end{cases}
$$

Now consider $E > V_0$.

Now, we impose boundary conditions

$$
\psi_I(a) = \psi_{II}(a) \quad,
\psi_I'(a) = \psi_{II}`(a)
$$

Thus, we shall obtain

$$
\psi_I(x) = Ae^{ik_1x} + Be^{-ik_1x}
$$

where $k_1^2 = 2mE/\hbar^2$, $Ae^{ik_1x}$ represents incident wave, $Be^{-ik_1x}$ represents reflected wave and

$$
\psi_{II}(x) = Ce^{ik_2 x} + De^{-ik_2 x}
$$

where $k_2^2 = 2m(E - V_0)/\hbar^2$.

Now, for the standard problem, since incoming is from the left, outgoing in the other region has to be along +x and thus, we take $D = 0$. Hence, the reflection coefficient is given by $|B/A|^2$ and transmission coefficient is given by $(k_2/k_1)|C/A|^2$ and we have $R + T = 1$.

In case of $E < V_0$, $\psi_{II}(x)$ will show exponential behavior insstead of oscillatory.

### Rectangular Barrier

We consider the potential

$$
V(x) =
\begin{cases}
0, & x < 0 \\
V_0, & 0 \leq x \leq a \\
0, & x > a
\end{cases}
$$

For $E < V_0$, Region II is classically forbidden, but the wavefunction can penetrate the barrier and produce a nonzero transmission probability into Region III which is called tunnelling.

Now, for any $E$, on integrating Schrödinger's equation around $x = a$ with $\epsilon \to 0$, we find $\psi$ and $\psi'$ must be continuous at $x = a$ and similarly for $x = 0$.

We impose boundary conditions

$$
\psi_I(0) = \psi_{II}(0) \quad,
\psi_I'(0) = \psi_{II}'(0)
$$

$$
\psi_{II}(a) = \psi_{III}(a) \quad,
\psi_{II}'(a) = \psi_{III}'(a)
$$

On applying Schrödinger's equation,

$$
\psi_I(x) = Ae^{ik_1x} + Be^{-ik_1x}
$$

where $k_1^2 = 2mE/\hbar^2$ and

For $E > V_0$, we will have

$$
\psi_{II}(x) = Ce^{ik_2x} + De^{-ik_2x}
$$

where $k_2^2 = 2m(E-V_0)/\hbar^2$,

but for $E < V_0$, we write

$$
\psi_{II}(x) = Ce^{\kappa x} + De^{-\kappa x}
$$

where $\kappa^2 = 2m(V_0 - E)/\hbar^2$.

$$
\psi_{III}(x) = Fe^{ik_1x} + Ge^{-ik_1x}
$$

Since there is no incoming wave from the right, we have $G= 0$.

## Harmonic Oscillator

A harmonic oscillator is a system in which the restoring force is linear in the displacement from its equilibrium position.

Thus, if the equilibrium position is $x_0$, then

$$
F(x) = -k(x - x_0)
$$

where $k > 0$ is the force constant.

Using

$$
F = -\frac{dV}{dx}
$$

and integrating, we obtain

$$
V(x) = \frac{1}{2} k(x-x_0)^2+ C
$$

Choosing potential energy to be zero at equilibrium, we have

$$
V(x) = \frac{1}{2} k(x-x_0)^2
$$

Choosing the equilibrium position as $x_0 = 0$

$$
V(x) = \frac{1}{2} kx^2
$$

### Classical Harmonic Oscillator

The classical harmonic oscillator is obtained by applying Newton's law.

$$
F = m \frac{d^2x}{dt^2}
$$

giving

$$
\frac{d^2x}{dt^2} + \frac{k}{m}x = 0
$$

Now, define the angular frequency

$$
\omega = \sqrt{\frac{k}{m}}
$$

Therefore,

$$
\frac{d^2x}{dt^2} + \omega^2 x = 0
$$

The general solution of the above equation is given by

$$
x(t) = A \cos(\omega t) + B \sin (\omega t)
$$

where $A$ and $B$ are determined by the initial position and velocity.

The particle undergoes periodic oscillation with time period

$$
T = \frac{2\pi}{\omega}
$$

and the frequency is

$$
f = \frac{1}{T} = \frac{\omega}{2\pi}
$$

#### Energy of the Oscillator

For this system, the classical Hamiltonian is the total energy expressed in terms of $x$ and $p$

$$
H(x, p) = T + V
$$

The kinetic energy is

$$
T = \frac{1}{2} mv^2 = \frac{p^2}{2m}
$$

For the harmonic oscillator, the potential energy is

$$
V(x) = \frac{1}{2} kx^2 = \frac{1}{2} m \omega^2 x^2
$$

Thus,

$$
\boxed{H(x, p) = \frac{p^2}{2m} + \frac{1}{2} m\omega^2 x^2}
$$

which is the classical Hamiltonian of the harmonic oscillator. For this particular system, $H = E$ where $E$ is the total mechanical energy.

### Approximation of a General Potential Near a Local Minimum

Suppose a particle moves in some arbitrary potential $V(x)$. Now, suppose the potential has a local minimum at $x=x_0$.

Thus, at $x = x_0$,

$$
V'(x_0) = 0, \quad V''(x_0) > 0
$$

Now, expand $V(x)$ around $x_0$ using Taylor series

$$
V(x) = V(x_0) + V'(x_0)(x-x_0) + \frac{1}{2}V''(x_0)(x-x_0)^2 + \dots
$$

Now, $V'(x_0) = 0$ and if we are considering small displacements from the minimum, the higher-order terms become much smaller than the quadratic term and thus, we can approximate

$$
V(x) \approx V(x_0) + \frac{1}{2}V''(x_0)(x-x_0)^2
$$

Since

$$
F(x_0) = -V'(x_0) = 0
$$

this local minimum $x_0$ corresponds to an equilibrium position.

Choose the potential energy at the equilibrium point,

$$
V(x_0) = 0
$$

which gives

$$
V(x) \approx \frac{1}{2} V''(x_0)(x - x_0)^2
$$

Also, define displacement from equilibrium by

$$
\xi = x - x_0
$$

then we have

$$
V(\xi) \approx \frac{1}{2} V''(x_0) \xi^2
$$

Now, harmonic oscillator has

$$
V(\xi) = \frac{1}{2} k \xi^2
$$

Comparing the two, we can see that we have

$$
k = V''(x_0)
$$

Now,

$$
F(x) = -V'(x)
$$

thus near $x_0$,

$$
F(x) \approx -k(x-x_0)
$$

where $k$ represents how strongly the force pulls back the object when displaced slightly away from equilibrium.

### Quantum Harmonic Oscillator

In quantum mechanics, position and momentum are repesented by operators

$$
x \to \hat{x}, \quad p \to \hat{p}
$$

and in the position representation.

$$
\hat{x} = x
$$

and

$$
\hat{p} = -i\hbar \frac{d}{dx}
$$

Therefore, we transform the classical Hamiltonian to quantum Hamiltonian

$$
\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \frac{1}{2} m \omega^2 \hat{x}^2
$$

Now, the time-dependent Schrödinger equation is

$$
i\hbar\frac{\partial\Psi(x,t)}{\partial t}=\hat{H}\Psi(x,t)
$$

For the stationary states, we use the time-independent Schrödinger equation

$$
\hat{H} \psi(x) = E \psi(x)
$$

Therefore, we obtain

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + \frac{1}{2}m \omega^2 x^2 \psi = E \psi
$$

### Analytic Method

We have

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + \frac{1}{2}m \omega^2 x^2 \psi = E \psi
$$

with the boundary condition given by

$$
\psi(x) \to 0 \text{ as } |x| \to \infty
$$

Now, define

$$
\xi = \sqrt{\frac{m \omega}{\hbar}} x
$$

which is dimensionless.

On simplifying after susbtituting $x = {(\hbar/{m\omega})}^{1/2} \xi$, we obtain the dimensionless Schrödinger equation for the quantum harmonic oscillator

$$
\frac{d^2 \psi}{d \xi^2} + (\epsilon - \xi^2) \psi = 0
$$

where $\epsilon$ is a constant given by $\epsilon = 2E/{\hbar \omega}$.

Now, for $x \to \infty$, $|\xi| \to \infty$ and thus $\xi^2 \gg \epsilon$ giving the asymptotic equation

$$
\frac{d^2\psi}{d\xi^2} - \xi^2 \psi = 0
$$

General asymptotic form is

$$
\psi \sim Ae^{-\xi^2/2} + Be^{\xi^2/2}
$$

At large $|\xi|$, the wavefunction can behave like a linear combination of these two functions.

For normalization to hold, $B = 0$ so

$$
\psi \tilde Ae^{-\xi^2/2}
$$

Now take an Ansatz for all $\xi$

$$
\psi(\xi) = h(\xi) e^{-\xi^2/2}
$$

on substituting it in the dimensionless Schrödinger equation, we get

$$
\frac{d^2h(\xi)}{d{\xi}^2} - 2\xi \frac{dh(\xi)}{d\xi} +
(\epsilon-1)h(\xi) = 0
$$

Here, $\xi = 0$ is an ordinary point for the second-order. Therefore, we can seek a power-series solution about $\xi = 0$. Since $x=0$ was chosen as the equilibrium position in the $x$-coordinate, $\xi = 0$ corresponds to the equilibrium point in the dimensionless coordinate.

So, writing series solution around $x = 0$ i.e. $h(\xi) = \sum_{j=0}^{\infty} a_j \xi^j$, we get the recurrence relation

$$
a_{j+2} = \frac{2j + 1 - \epsilon}{(j+1)(j+2)} a_j
$$

The even part of the series is given by $\sum_{n=0}^{\infty} a_{2n} \xi^{2n}$ and odd part of the series is given by $\sum_{n=0}^{\infty} a_{2n+1} \xi^{2n+1}$.

Now, the physical solution requires the series for $h(\xi)$ to terminate since otherwise the resulting wavefunction grows exponentially at large $|\xi|$, making it non-normalizable. Thus, we have to truncate the series solution for some $n$.

Suppose for some $n$,

$$
a_{n+2} = 0
$$

then we have

$$
\epsilon = \frac{2E}{\hbar \omega} = 2n+1
$$

and thus the series terminates as every second coefficient later on will be zero. We will choose the other parity terms to be all zero since $h(\xi) = c_1 h_{odd}(\xi) + c_2 h_{even}(\xi)$ since the non-terminating branch is non-normalizable.

So, we get

$$
E_n = (n + \frac{1}{2}) \hbar \omega
$$

where $n = 0, 1, 2, \dots$.

Now, $h_n(\xi)$ refers to the polynomial of degree $n$ and if $n$ is even, the odd branch is considered zero and even survive and vice versa.

So, now we have

$$
\psi_n(\xi) = Ah_n(\xi)e^{-\xi^2/2}
$$

where $A$ is normalization constant.

We obtain

$$
\psi_n(x) = {\left(\frac{m\omega}{\pi \hbar}\right)^{1/4}}\frac{1}{\sqrt{2^n n!}} H_n(\xi) e^{-\xi^2/2}
$$

where $\xi = x \sqrt{{m \omega}/\hbar}$ and $H_n(\xi)$ is the Hermite Polynomial given by

$$
H_n(\xi) = (-1)^{n} e^{\xi^2} \frac{d^n}{d\xi^n} (e^{-\xi^2})
$$

and their property of orthogonality is given by

$$
\int_{-\infty}^{\infty} {H_m^{\ast}(\xi) H_n(\xi) e^{-\xi^2} d\xi} =  \sqrt{\pi} \, 2^n n! \delta_{mn}
$$

### Ladder Operator Method

To solve the equation, we define and use the ladder operators

$$
\hat{a}^{\dagger} := \frac{1}{\sqrt{2\hbar m \omega}}(m\omega \hat{x} - i\hat{p})
$$

$$
\hat{a} := \frac{1}{\sqrt{2 \hbar m \omega}} (m\omega \hat{x} + i \hat{p})
$$

##### Commutators and Anticommutators

A commutator is denoted by $[A, B]$ and defined as $[A, B] := AB - BA$.

If $[A, B] = 0$, then $A$ and $B$ are said to be _commute_.

Now,

$$
[\hat{x}, \hat{p}]f(x) = i\hbar f(x)
$$

thus

$$
[\hat{x}, \hat{p}] = i\hbar
$$

An anticommutator is denoted by $\\{A, B \\}$ and defined as $\\{A, B \\} := AB + BA$.

Now,

$$
\hat{a}= \sqrt{\frac{1}{2\hbar m \omega}} (m \omega \hat{x} + i \hat{p})
$$

and

$$
\hat{a}^{\dagger} = \sqrt{\frac{1}{2\hbar m \omega}} (m \omega \hat{x} - i \hat{p})
$$

Therefore,

$$
\begin{aligned}
\left[\hat a,\hat a^\dagger\right]
&= \hat a\hat a^\dagger-\hat a^\dagger\hat a \\
&= \frac{1}{2 \hbar m \omega} (m^2 \omega^2 \hat{x}^2 + \hat{p}^2 - i m \omega \hat{x} \hat{p} + i m \omega \hat{p} \hat{x}) - \frac{1}{2 \hbar m \omega}(m^2 \omega^2 \hat{x}^2 + \hat{p}^2 + i m \omega \hat{x} \hat{p} - i m \omega \hat{p} \hat{x}) \\
&= \frac{1}{2 \hbar m \omega} (-2 i m \omega \hat{x} \hat{p} + 2 i m \omega \hat{p} \hat{x}) \\
&= \frac{i}{\hbar} (\hat{p}\hat{x} - \hat{x}\hat{p}) \\
&= \frac{i}{\hbar} [\hat{p}, \hat{x}] \\
&= \frac{i}{\hbar} (-i\hbar) = 1
\end{aligned}
$$

Thus, we get

$$
[\hat{a}, \hat{a}^{\dagger}] = 1
$$

#### Hamiltonian in Terms of Ladder Operators

We know that for quantum harmonic oscillator

$$
\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2} m\omega^2 \hat{x}^2
$$

Substituting $\hat{p}$ and $\hat{x}$ in terms of ladder operators and simplifying, we get

$$
\begin{aligned}
\hat{H} &= \hbar \omega \left({\hat{a}^\dagger} \hat{a} + \frac{1}{2}\right) \\ &= \hbar \omega \left(\hat{a} {\hat{a}^\dagger}  - \frac{1}{2}\right)
\end{aligned}
$$

Also define

$$
\hat{N} = \hat{a}^{\dagger} \hat{a}
$$

From this, we can find

$$
\left[\hat{H}, \hat{a} \right] = -\hbar \omega \hat{a}
$$

and

$$
\left[\hat{H}, \hat{a}^{\dagger} \right] = \hbar \omega \hat{a}^{\dagger}
$$

#### Lowering and Raising Operators

From earlier results, we could evaluate and find

$$
\hat{H}(\hat{a} \psi) = \left(E - \hbar \omega \right)\left( \hat{a} \psi \right)
$$

thus, $\hat{a}$ is referred to as lowering operator, and

$$
\hat{H}({\hat{a}^{\dagger} \psi}) = \left(E + \hbar \omega \right) \left( \hat{a}^{\dagger} \psi \right)
$$

where $\psi$ are the stationary states and $E$ the corresponding eigenvalues.

#### Ground State Energy

Ground state is defined to be the stationary state $\psi_0$ such that no further lowering of energy is possible.

This comes from Hamiltonian operator and the fact that the quantity $\int_{-\infty}^{\infty} {\psi^{\ast} (\hat{a}^{\dagger} \hat{a}) \psi}$ will be non-negative (because $\int_{-\infty}^{\infty} {|a \psi|^2 dx} \geq 0$) and thus expectation value $\langle \hat{a}^{\dagger}\hat{a} \rangle \geq 0$.

Since $\psi_0$ is an energy eigenstate, we can conclude $\langle \hat{H} \rangle \geq \hbar \omega / 2$, and $E = \langle \hat{H} \rangle \geq \hbar \omega / 2$. Thus, the ground state reaches the lower bound $\langle N \rangle = 0$. Now, $\langle N \rangle = \int |a \psi_0|^2 dx$ and thus, we have

$$
a \psi_0 = 0
$$

where $\psi_0$ is defined to be the ground state.

On substituting expression of $\hat{a}$, we find

$$
\psi_0(x) = Ae^{-\frac{m \omega}{2 \hbar} x^2}
$$

and by normalization, we find

$$
\psi_0(x) = {\left(\frac{m \omega}{\pi \hbar}\right)}^{1/4} e^{-\frac{m \omega}{2 \hbar} x^2}
$$

We also have

$$
\hat{H} \psi_0 = E_0 \psi_0
$$

and thus, we get

$$
\frac{\hbar \omega}{2} \psi_0 = E_0 \psi_0
$$

Hence,

$$
E_0 = \frac{1}{2} \hbar \omega
$$

#### Effect on Successive Energy States by Ladder Operators

For a stationary state $\psi_n$, we know

$$
\hat{H} \psi_n = E_n \psi_n
$$

Thus,

$$
\hat{H}(\hat{a}^{\dagger} \psi_n) = (E_n + \hbar \omega)(\hat{a}^{\dagger} \psi_n)
$$

and

$$
\hat{H}(\hat{a} \psi_n) = (E_n - \hbar \omega)(\hat{a} \psi_n)
$$

hence $\hat{a}^{\dagger} \psi_n$, if nonzero, is an energy eigenfunction with energy $E_n + \hbar \omega$.

So, starting from ground state, every application of $\hat{a}^{\dagger}$ adds $\hbar \omega$ and thus, in general

$$
E_n = E_0 + n\hbar \omega
$$

so

$$
E_n = \left(n + \frac{1}{2} \right)\hbar \omega
$$

Now, we know that $\hat{a} \psi_n$ has energy $E_n - \hbar \omega$. Therefore, it must be proportional to the corresponding lower state

$$
\hat{a} \psi_n = C_n \psi_{n-1}
$$

Similarly,

$$
\hat{a}^{\dagger} \psi_n= D_n \psi_{n+1}
$$

Using $\hat{N} = \hat{a}^{\dagger} \hat{a}$, $\hat{H} = \hbar \omega (\hat{N} + 1/2)$, and $E_n = (n + 1/2) \hbar \omega$, we get

$$
\hat{a}^{\dagger} \hat{a} \psi_n = n\psi_n
$$

Now, $\hat{a} \psi_n = C_n \psi_{n-1}$, thus taking square magnitude and integrating, we have

$$
\int_{-\infty}^{\infty}{|\hat{a}\psi_n|^2} dx = |C_n|^2 \int_{-\infty}^{\infty}{|\psi_{n-1}|^2 dx}
$$

Now,

$$
\int_{-\infty}^{\infty}{|\hat{a}\psi_n|^2} dx = \int_{-\infty}^{\infty}{\psi_n^{\ast} \hat{a}^{\dagger} \hat{a} \psi_n} dx
$$

and we know $\hat{a}^{\dagger} \hat{a} \psi_n = n\psi_n$, so we finally have

$$
\int_{-\infty}^{\infty}{|\hat{a}\psi_n|^2} dx = n
$$

Thus,

$$
n = |C_n|^2
$$

and so

$$
|C_n| = \sqrt{n}
$$

Hence,

$$
\boxed{\hat{a} \psi_n = \sqrt{n} \psi_{n-1}}
$$

Now, we also have

$$
\hat{a} \hat{a}^{\dagger} = \hat{a}^{\dagger} \hat{a} + 1
$$

Therefore,

$$
\hat{a} \hat{a}^{\dagger} \psi_n = (n+1) \psi_n
$$

and $\hat{a}^{\dagger} \psi_n = D_n\psi_{n+1}$.

So, using above expressions, we similarly get

$$
\boxed{\hat{a}^{\dagger} \psi_n = \sqrt{n+1} \psi_{n+1}}
$$

#### Property of Orthogonality

Now, consider

$$
\int_{-\infty}^{\infty} \psi_m^{\ast} \hat{a}^{\dagger} \hat{a} \psi_n dx = n \int_{-\infty}^{\infty} \psi_m^{\ast} \psi_n dx = \int_{-\infty}^{\infty} {(\hat{a}^{\dagger} \hat{a} \psi_m)^{\ast} \psi_n \, dx}
$$

which comes from the fact that $\hat{a}^{\dagger} \hat{a}$ is a self-adjoint operator.

Thus, we have

$$
n \int_{-\infty}^{\infty} \psi_m^{\ast} \psi_n dx =  m \int_{-\infty}^{\infty} \psi_m^{\ast} \psi_n \, dx
$$

If $m \neq n$,

$$
\int_{-\infty}^{\infty} \psi_m^{\ast} \psi_n dx = 0
$$

Thus, we get the property of orthogonality for stationary states

$$
\boxed{\int_{-\infty}^{\infty} {\psi_m^{\ast} \psi_n dx} = \delta_{mn}}
$$

#### Expectation Value of Energy

The expectation value for potential energy is given by

$$
\langle \hat{V} \rangle = \frac{1}{2} \hbar \omega \left(n + \frac{1}{2} \right)
$$

that for kinetic energy is given by

$$
\langle \hat{T} \rangle = \frac{1}{2} \hbar \omega \left(n + \frac{1}{2} \right)
$$

and total energy is given by

$$
\langle \hat{H} \rangle = \hbar \omega \left(n + \frac{1}{2}\right)
$$
