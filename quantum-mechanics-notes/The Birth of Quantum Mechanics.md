# The Birth of Quantum Mechanics

- [Double Slit Experiment](#double-slit-experiment)
  - [With Single Particles](#with-single-particles)
- [De Broglie's Hypothesis of Matter Waves](#de-broglies-hypothesis-of-matter-waves)
  - [Explaining Bohr's Quantization Condition](#explaining-bohrs-quantization-condition)
  - [Davisson-Germer Experiment](#davisson-germer-experiment)
- [Wavefunction](#wavefunction)
  - [Schrodinger's Construction of Wave Mechanics](#schrodingers-construction-of-wave-mechanics)
    - [First Communication](#first-communication)
    - [Second Communication](#second-communication)
  - [Extension of Wave Mechanics](#extension-of-wave-mechanics)
    - [Third Communication - Perturbation Theory](#third-communication---perturbation-theory)
    - [Fourth Communication - Time-Dependent Wave Mechanics](#fourth-communication---time-dependent-wave-mechanics)
  - [Physical Interpretation of the Wavefunction](#physical-interpretation-of-the-wavefunction)
    - [Schrödinger's Interpretation](#schrödingers-interpretation)
    - [Born's Statistical Interpretation](#borns-statistical-interpretation)

## Double Slit Experiment

Young's double experiment was the time when the concept that light is a wave was accepted. The conditions for the experiment are as follows:-

1. Very closely spaced slits
2. Coherent sources i.e. same frequency and constant phase difference
3. A monochromatic source to clarify the effect

If $E_1$ and $E_2$ are oscillating electric-fields, such that

$$
E_1 = A_1 \cos(\omega t)
$$

$$
E_2 = A_2 \cos(\omega t + \phi)
$$

where $A_1$ and $A_2$ are amplitudes of electric fields, $\omega$ is the angular frequency and $\phi$ is the constant phase difference between the two.

Due to path difference at a point P on screen resulting in phase difference, if the waves arrive in phase at the point, constructive interference occurs ($\Delta \phi = 2m\pi$) and if in opposite phase ($\Delta \phi = (2m+1)\pi$, destructive interference occurs.

The total phase difference is given by

$$
\Delta \phi = \phi + \frac{2\pi}{\lambda}(r_2-r_1)
$$

where $r_1$ and $r_2$ are path lengths.

In classical electromagnetic theory, the intensity observed on the screen is determined by the superposition of the electromagnetic fields from the two slits:

$$
E = E_1 + E_2
$$

and $I \propto E^2$.

The resulting intensity distribution is the interference pattern.

### With Single Particles

On passing single particle at a time in the apparatus, the observations were as follows:-

1. If both slits are open, single electron formed a localized spot on the screen
2. Place at which particle will be detected can't be predicted.
3. After a large number of detection events, the distribution of particles on the screen forms an interference pattern, whose intensity distribution can be predicted.

This suggested statistical nature so one can determine probability $P$ that particle hits screen $S_z$ at certain point $X(x, y, z, t)$.

The appearance of an interference pattern even when particles are sent through the apparatus individually suggests that the wave-like behavior is associated with the particles themselves, rather than arising from interactions between different particles. This motivates the de Broglie's hypothesis of matter waves.

## De Broglie's Hypothesis of Matter Waves

De Broglie starts by assuming that a particle has a periodic phenomenon whose frequency is related to its rest energy $E_0$ and thus obtains

$$
E_0 = h\nu_0 = m_0c^2
$$

He then considers the particle from a reference frame in which it is moving with velocity $v$. Special relativity gives its total energy as

$$
E = \gamma m_0 c^2
$$

where $m_0$ is the rest mass and $\nu_0$ is the frequency associated with the particle's periodic phenomenon in its reset frame,

$$
\gamma = \frac{1}{\sqrt{1-v^2/c^2}}
$$

and $v$ is the velocity of the particle.

He associates the quantum frequency with this energy using $E = h\nu$ and therefore,

$$
\nu_p = \gamma \nu_0
$$

However, the periodic phenomenon associated with the particle is also affected by relativistic time transformation.

De Broglie introduced the requirement of *phase harmony*, namely that the periodic phenomenon associated with the moving particle and its associated phase wave remain synchronized in phase. This requirement determines the phase velocity of the wave.

The phase velocity is determined to be

$$
v_p = \frac{c^2}{v}
$$

Special relativity also gives $p = \gamma m_0v$.

Ultimately, after combining the relativistic quantities with de Broglie's phase-wave construction.

$$
v = \lambda \nu_p \implies \lambda = \frac{v_p}{\nu_p}
$$

and now using $p = \gamma m_0 v$, we get

$$
\lambda = \frac{h}{p}
$$

is obtained, which was verified by experiments performed by Davisson-Germer in which they observed electron diffraction being consistent with the de Broglie wavelength $\lambda = h/p$.

### Explaining Bohr's Quantization Condition

Bohr had said

$$
mvr = \frac{nh}{2\pi}
$$

De Broglie interpreted Bohr's allowed orbits as resonant configurations of the associated matter wave.

This arises from the following -

An electron moving around the nucleus has an associated matter wave and for a stable configuration, it must return return to the same phase after going around the circumference. Thus, the circumference must contain an integer number of wavelengths such that

$$
2\pi r = n\lambda, \quad n = 1, 2, 3, \dots
$$

which is the resonance or standing-wave condition.

Now, we have $\lambda = h/p$ and for the electron in the non-relativistic Bohr model, $p = mv$. Thus, we obtain,

$$
mvr = \frac{nh}{2\pi}
$$

which is exactly Bohr's quantization condition.

Light, previously understood as a wave, had been shown by Einstein and Compton to possess particle-like properties. De Broglie proposed the converse possibility that particles traditionally regarded as localized objects could possess wave-like properties.

Thus, a free particle with momentum $p$ can be associated to a plane wave with $\lambda = h/p$.

### Davisson-Germer Experiment

Davisson and Germer experimentally observed diffraction of electrons from a nickel crystal. The diffraction pattern demonstrated that electrons exhibit wave-like behavior. The wavelength inferred from the diffraction measurements was consistent with de Broglie's prediction

$$
\lambda = \frac{h}{p}
$$

This provided experimental evidence for the wave nature of matter and strongly supported de Broglie's hypothesis.

## Wavefunction

In vague terms, de Broglie hypothesized that associated with every matter particle of momentum $p$, there is a matter wave with $\lambda=h/p$. However, what mathematical quantity represents this matter wave, and what physical meaning it has, remained to be established. Schrödinger's wave mechanics introduced the wavefunction $\psi$, whose probabilistic interpretation was subsequently given by Born.

### Schrodinger's Construction of Wave Mechanics

#### First Communication

Erwin Schrödinger was inspired from the matter waves hypothesis by de Broglie and wanted to find a more general explanation for the quantization conditions in Bohr's model and in energy.

Inspired from Hamilton-Jacobi equation, he introduced a preliminary analytical transformation $S = K \ln \psi$, and focused on Hydrogen's atomic system to make it analogous. He obtains

$$
(\nabla \psi)^2 - \frac{2m}{K^2} \left(E + \frac{e^2}{r}\right)\psi^2 = 0
$$

from the time independent (stationary) Hamilton-Jacobi equation

He treats this as a functional

$$
J\left[\psi \right] = \iiint \left[(\nabla \psi)^2 - \frac{2m}{K^2}\left(E + \frac{e^2}{r}\right) \psi^2\right] d^3x
$$

and then finds $\delta J = 0$., i.e. stationary with respect to small changes under $\psi$.

After applying integration by parts and simplifying,

$$
\frac{1}{2} \delta J = \int \delta\psi \, dS \frac{\partial \psi}{\partial n} - \iiint dx\,dy\,dz\, \delta \psi\left[\nabla^2\psi + \frac{2m}{K^2}\left(E + \frac{e^2}{r}\right)\psi\right] = 0
$$

The boundary term is handled by the allowed boundary variations (in particular, one can choose variations that vanish on the boundary). The remaining integral must then vanish for every arbitrary interior variation $\delta \psi$. Therefore, by the fundamental lemma of the calculus of variations, the coefficient of $\delta\psi$ must vanish, we have

$$
\nabla^2 \psi + \frac{2m}{K^2} \left(E + \frac{e^2}{r}\right)\psi = 0
$$

For the bound-state problem (due to electron being trapped in a region by a potential rather than being free to escape to infinity), the physically acceptable solutions require $E < 0$, and an acceptable bound-state solution exists only when..

$$
\frac{me^2}{K\sqrt{-2mE}} = l
$$

where $l = 1, 2, 3, \dots$, all of which comes from the mathematics of the allowed solutions.

And this gets us at quantization.

$$
E=-\frac{me^4}{2K^2l^2}
$$

It shall be noted that Schrödinger has $n = 0, 1, 2, \dots$ from the angular/spherical harmonic part and $l = 1, 2, 3, \dots$ from the radial/boundary condition. Schrödinger's notation differs from modern notation. His $l$ is essentially the modern principal quantum number $n_{principal}$, while his angular index $n$ corresponds to the modern orbital angular-momentum quantum number $l$.

For a given energy level $l$, the allowed angular indices are $n = 0, 1, \dots, l-1$.

Finally, choosing

$$
K = \frac{h}{2\pi} = \hbar
$$

gives

$$
E_l = -\frac{me^4}{2\hbar^2l^2}
$$

reproducing the familiar hydrogen energy spectrum.

#### Second Communication

Schrödinger mentions he showed the connection analytically but not why it exists. Inspired from analogous behavior of geometrical optics and Hamilton-Jacobi mechanics, Schrödinger proposes the analogy stating wave mechanics might be analogous to wave optics, the reason for introducing a wave equation.

Consider a mechanical system with coordinates $q_1, q_2, \dots, q_n$

$$
W = W(q_1, q_2, \dots, q_n, t)
$$

where $W$ is the action function (Hamilton principle function), depending on the configuration coordinates and time.

For a conservative system with time-independent potential, he looks for a separated solution

$$
W = -Et + S(q)
$$

for

$$
\frac{\partial W}{\partial t} + T\left(q_k, \frac{\partial W}{\partial q_k} \right) + V(q_k) = 0
$$

where $E$ is constant total energy of mechanical system and $S$ is the position dependent part of the action function.

He defines the configuration-space geometry such that

$$
ds^2 = 2Tdt^2
$$

and everything following is with respect to this geometry.

Using Hamilton-Jacobi theory, he obtains

$$
|\nabla_s W|^2 = 2(E-V)
$$

This allows him to draw surfaces $W = \textrm{constant}$ which behave mathematically like wavefronts. And the trajectories of the mechanical system are perpendicular to those surfaces, analogous to rays being perpendicular to optical wavefronts. This establishes the mechanics-optics analogy. It is asked if classical mechanics is part of deeper wave mechanics like geometric optics is to wave optics.

Now, he assumes that the wave systems can be treated as sinusoidal waves and expects the phase to be in something of the form $\sin(\alpha W)$ since a complete cycle corresponds to a phase change of $2\pi$. Schrödinger takes $\alpha = 2\pi/h$ for the argument to be dimensionless. Thus,

$$
\sin \left(\frac{2\pi W}{h}\right) = \sin\left(\frac{2\pi}{h}\left(-Et + S\right)\right)
$$

Comparing it with standard definition of sinusoidal oscillation $sin(2\pi \nu t+ \textrm{constant})$ where $\nu$ is the frequency, we have $E = h\nu$.

Hence, when the mechanical action $W$ is identified with the wave phase, the conserved mechanical energy $E$ becomes proportional to the wave frequency.

Now, for a sinusoidal wave, one complete oscillation corresponds to a phase change of $2\pi$. Since

$$
\phi = \frac{2\pi}{h}W
$$

a phase change of $2\pi$ corresponds to

$$
\Delta W = h
$$

Also, we have

$$
dW = |\nabla_s W|ds
$$

where $ds$, locally is his configuration-space metric distance, not ordinary physical distance $dl$

Therefore, for one wavelength,

$$
h = |\nabla_s W|\lambda_s
$$

thus,

$$
\lambda_s = \frac{h}{|\nabla_s W|}
$$

When specializing to a single particle, $ds = \sqrt{m}dl$ and

$$
|\nabla_s W| = \frac{p}{\sqrt{m}}
$$

So ordinary spatial wavelength becomes

$$
\lambda = \frac{h}{p}
$$

which is the **de Broglie's wavelength**.

Now he finds the velocity of the **wavefront**

$$
v_{phase} = \frac{E}{p}
$$

For a non-relativistic particle,

$$
v_{particle} = \frac{p}{m}
$$

and

$$
E = \frac{p^2}{2m}
$$

So,

$$
v_{phase} = \frac{1}{2} v_{particle}
$$

This leads him considering a wave packet with slightly different wavelengths superposed together and that $v_{group} = v_{particle}$ for the appropriate non-relativistic matter-wave relation. He therefore seeks a wave equation whose geometrical-optics/short-wavelength limit reproduces Hamilton–Jacobi mechanics.

Since the wave equation is not uniquely determined by the preceding argument, Schrödinger chooses, for "simplicity", to try a second-order wave equation.

$$
\nabla_s^2 \psi - \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} = 0
$$

where he now introduces $\psi$ as the Wellenfunktion (wavefunction) and $\nabla_s^2$ denotes the Laplacian with respect to Schrödinger's special configuration-space metric

$$
ds^2 = 2Tdt^2
$$

For the class of stationary/harmonically oscillating processes he considers, the time dependence can be represented by a factor $e^{i\nu t}$.

$$
\psi(q, t)=\phi(q) e^{i\nu t}
$$

Then,

$$
\frac{\partial^2\psi}{\partial t^2} = -\nu^2 \psi
$$

Substituting it into the second order equation, the time dependence disappears giving

$$
\nabla_s^2 \psi + \frac{\nu^2}{v^2}\psi = 0
$$

Now, $E = h\nu$ and from mechanical quantities and some simplification, he obtains

$$
\nabla_s^2\psi + \frac{8\pi^2}{h^2}(E-V)\psi = 0
$$

This gives the stationary wave equation that is equivalent, for a single non-relativistic particle, to what is now called the time-independent Schrödinger equation.

Now, for particle in ordinary 3D,

$$
\nabla_s^2 = \frac{1}{m}\nabla^2
$$

because $ds^2 = m dl^2$.

Thus, for one particle in ordinary 3D space, it becomes

$$
\nabla^2 \psi + \frac{8\pi^2m}{h^2}(E-V)\psi = 0
$$

He obtains quantization from the wave equation itself. For a given system, the requirement that the solution be finite, continuous and single-valued under the natural boundary conditions restricts the allowed solutions to particular eigenvalues. Schrödinger then demonstrates this mathematically on concrete systems such as the fixed-axis rotator, where discrete eigenvalues arise directly from the wave equation ($V = -e^2/r$). He thereby replaces the older procedure of imposing separate quantum conditions on classical motions with an eigenvalue problem whose allowed values emerge from the equation itself.

### Extension of Wave Mechanics

#### Third Communication - Perturbation Theory

Later, using this framework, he develops perturbation theory within wave mechanics to deal with small additional interactions and determine their effects on the eigenvalues and eigenfunctions. In essence, the perturbed energy is treated as a correction to the unperturbed value,

$$
E_n = E_n^{(0)} + \Delta E_n + \dots
$$

where $\Delta E_n$ is the small correction to the unperturbed eigenvalue caused by the added interaction.

He then applies this to the Stark effect, the shifting and splitting of atomic spectral lines due to an external electric field.

#### Fourth Communication - Time-Dependent Wave Mechanics

Schrödinger observes that the earlier equation is restricted to stationary oscillations with a definite energy $E$ and seeks a more general equation for $\psi(q, t)$.

Now, for a stationary oscillation, the time dependence is represented by a factor involving $e^{2\pi i Et/h}$.

This gives

$$
E\psi = -i \hbar \frac{\partial \psi}{\partial t}
$$

Using the time dependence of a definite-energy oscillation, he replaces the energy parameter $E$ by a time derivative, thereby obtaining the general time-dependent wave equation.

$$
i\hbar \frac{\partial \psi}{\partial t} = \left(-\frac{\hbar^2}{2m}\nabla^2 + V\right)\psi
$$

Schrödinger extends perturbation theory to explicitly time-dependent perturbations and applies it to an atom interacting with an oscillating electric field. He studies the resulting resonance and its connection with radiation-induced transitions. He writes the perturbed wavefunction as the known stationary solution plus a small correction. Substitution produces correction terms oscillating with frequencies corresponding to $E_k \pm h\nu$ and he studies resonance when the applied frequency matches a difference between stationary energies,

$$
E_n-E_k=h\nu
$$

Schrödinger also considers relativistic and magnetic generalizations of the wave-mechanical equations, although this treatment was not yet a complete relativistic quantum theory.

### Physical Interpretation of the Wavefunction

#### Schrödinger's Interpretation

Schrödinger then attempts to give $\psi$ a physical interpretation. He associates $\bar{\psi}\psi=|\psi|^2$ with a continuous density/weight and, for the electron, interprets the quantity in terms of a spatially distributed charge density.

For example, for an electron described using a spatial wavefunction, he imagines the electron's charge as being spread continuously through space, with the distribution related to $|\psi(r)|^2$.

#### Born's Statistical Interpretation

Born represents a freely moving particle in Schrödinger's wave mechanics by a plane wave, towards an atom.

When the electron's wave encounters the atom's potential, incoming wave gets scattered resulting into components going into many different directions which was described by Schrödinger's equation. The outgoing wave essentially consists of several components of waves going in different directions each having a coefficient.

Born took inspiration from Einstein's work on radiation which said that intensity of classical wave could be related to the statistical occurrence of photons.

Born proposed that the coefficient $\Phi$ of a scattered wave determines the probability of the corresponding scattering outcome, with

$$
P \propto |\Phi|^2
$$

This was the initial form of what became the Born statistical interpretation.