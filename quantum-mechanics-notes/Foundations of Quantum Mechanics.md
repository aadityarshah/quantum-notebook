# Foundations of Quantum Mechanics 

- [The Schrödinger Equation](#the-schrödinger-equation)
  - [Normalization](#normalization)
  - [Statement of Probability Conservation](#statement-of-probability-conservation)
  - [Expectation Values](#expectation-values)
  - [Spread of the Distribution](#spread-of-the-distribution)
  - [Position and Momentum](#position-and-momentum)
  - [Heisenberg's Uncertainty Principle](#heisenbergs-uncertainty-principle)
- [Stationary States](#stationary-states)
  - [Concept of Hamiltonian](#concept-of-hamiltonian)
  - [General Solution](#general-solution)
- [Particle in an Infinite Potential Well](#particle-in-an-infinite-potential-well)
- [Particle in a Finite Potential Well](#particle-in-a-finite-potential-well)
- [Potential Barrier](#potential-barrier)
  - [Step Potential](#step-potential)
  - [Rectangular Barrier](#rectangular-barrier)

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
p(x, t) = |\Psi(x, t)|^2
$$

Thus, the probability of finding the particle between positions $a$ and $b$ is given by

$$
P(a \leq x \leq b) = \int_a^b p(x, t) dx 
$$

Since the particle must be found somewhere, the total probability of finding it over all space must be 1 and thus,
$$
\int_{-\infty}^{\infty} p(x, t) dx = 1
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
\langle f(x) \rangle = \int_{-\infty}^{\infty} \Psi^{\ast} f(x) \Psi dx
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
we take $$\hat{x} = x$$
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

In Schrödinger equation, if potential is assumed to be time-independent, one can apply separation of variables by taking $\Psi(x, t) = \psi(x)\phi(t)$  and obtain the Time-Independent Schrödinger equation for one spatial dimension

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
H(x, p) = \frac{p^2}{2m} + V(x)
$$

Equivalently, in quantum mechanics

$$
\hat{H}(\hat{x}, \hat{p}) = \frac{\hat{p}^2}{2m} + V(\hat{x})
$$

After canonical substitution of quantum operators, we have
$$
\hat{H} = - \frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x)
$$

Thus, we obtain the time-independent Schrödinger equation in the form

$$
\hat{H}\psi = E\psi
$$

and the expectation value of the total energy for a stationary state is 
$$
\langle H \rangle = E
$$

using $\hat{H}\psi = E\psi$ and normalisation and variance of $H$ is $\sigma_H^2 = 0$. Thus, every separable solution has the property that *every measurement of the total energy is certain to return the value $E$*.

### General Solution

The general solution of the time-dependent Schrödinger equation can be expressed as a linear superposition of separable solutions

$$
\Psi(x, t) = \sum_{n=1}^{\infty} c_n \psi_n(x) e^{-iE_nt/\hbar} = \sum_{n=1}^{\infty} c_n \Psi_n(x)
$$

i.e. the linear combination of separable solutions $\set{\psi_n(x)}_{n=1,2, \dots}$, and where $\Psi_n(x, t) = \psi_n(x) e^{-iE_nt/\hbar}$. Here, $|c_n|^2$ is the probability that a measurement of the energy would return the value $E_n$, and thus 

$$
\sum_{n=1}^{\infty} |c_n|^2 = 1
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
\psi(0) = 0 \\
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
\psi_I (0) = \psi_{II} (0) \\
\psi_I (0)' = \psi_{II}' (0) \\
$$\

and

$$
\psi_{II} (a) = \psi_{III} (a) \\
\psi_{II}' (a) = \psi_{III}' (a) \\
$$

where $\psi_I(x)$ denotes wavefunction for $x < 0$, $\psi_{II}(x)$ denotes wavefunction for $0 \leq x \leq a$ and $\psi_{III}(x)$ denotes wavefunction for $x > a$. 

Now, for $0 \leq x \leq a$, from Schrödinger's equation we have 

$$
-\frac{\hbar^2}{2m} \frac{d^2 \psi_{II}(x)}{dx^2} = E \psi_{II}(x)
$$

which gives solution of the form 

$$
\psi_{II}(x) = C e^{ikx} + D e^{-ikx}
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
\psi_I(a) = \psi_II(a) \\
\psi_I'(a) = \psi_II`(a)
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

In case of $E < V_0$, $\psi_II(x)$ will show exponential behavior insstead of oscillatory.

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
\psi_I(0) = \psi_{II}(0) \\
\psi_I'(0) = \psi_{II}'(0)
$$
$$
\psi_{II}(a) = \psi_{III}(a) \\
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